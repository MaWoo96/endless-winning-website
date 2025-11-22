'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { createClient, Profile, EntityType } from '@/lib/supabase';
import ProgressBar from '@/components/ui/ProgressBar';
import WelcomeStep from './steps/WelcomeStep';
import BusinessInfoStep from './steps/BusinessInfoStep';
import PlaidConnectStep from './steps/PlaidConnectStep';
import SuccessStep from './steps/SuccessStep';

const TOTAL_STEPS = 4;

interface UserProfile {
  id: string;
  firstName: string;
  businessName?: string;
  entityType?: EntityType;
}

export default function OnboardingWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  // Fetch user profile on mount
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const supabase = createClient();

        // Get current user
        const {
          data: { user },
          error: authError,
        } = await supabase.auth.getUser();

        if (authError || !user) {
          throw new Error('Not authenticated');
        }

        // Get profile data
        const { data: profile, error: profileError } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();

        if (profileError) {
          throw profileError;
        }

        setUserProfile({
          id: user.id,
          firstName: (profile as Profile).first_name || '',
          businessName: (profile as Profile).business_name || undefined,
          entityType: (profile as Profile).entity_type as EntityType || undefined,
        });

        // If onboarding is already completed, redirect to dashboard
        if ((profile as Profile).onboarding_completed) {
          window.location.href = '/dashboard';
          return;
        }
      } catch (err) {
        console.error('Error fetching user profile:', err);
        setError('Failed to load your profile. Please try refreshing the page.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  const goToNextStep = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep(currentStep + 1);
    }
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-off-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-navy-dark border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading your profile...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error || !userProfile) {
    return (
      <div className="min-h-screen bg-off-white flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-navy-dark mb-2">
            Something went wrong
          </h2>
          <p className="text-gray-600 mb-6">
            {error || 'Unable to load your profile.'}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="btn-primary"
          >
            Refresh Page
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-off-white flex flex-col">
      {/* Header with Logo */}
      <header className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-center sm:justify-start">
            <span className="text-xl font-bold text-navy-dark">
              Endless Winning
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center py-8 px-4">
        <div className="w-full max-w-2xl">
          {/* Progress Bar */}
          <div className="mb-8 sm:mb-12">
            <ProgressBar currentStep={currentStep} totalSteps={TOTAL_STEPS} />
          </div>

          {/* Step Content */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-10">
            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <motion.div key="welcome">
                  <WelcomeStep
                    firstName={userProfile.firstName}
                    onNext={goToNextStep}
                  />
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div key="business-info">
                  <BusinessInfoStep
                    userId={userProfile.id}
                    onNext={goToNextStep}
                    initialData={{
                      businessName: userProfile.businessName,
                      entityType: userProfile.entityType,
                    }}
                  />
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div key="plaid-connect">
                  <PlaidConnectStep
                    userId={userProfile.id}
                    onNext={goToNextStep}
                  />
                </motion.div>
              )}

              {currentStep === 4 && (
                <motion.div key="success">
                  <SuccessStep firstName={userProfile.firstName} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-400">
              Need help?{' '}
              <a
                href="mailto:support@endlesswinning.com"
                className="text-navy-dark hover:underline"
              >
                Contact support
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
