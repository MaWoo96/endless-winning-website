'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import { usePlaidLink } from 'react-plaid-link';

interface PlaidConnectStepProps {
  userId: string;
  onNext: () => void;
}

type ConnectionStatus = 'idle' | 'loading' | 'ready' | 'connecting' | 'success' | 'error';

export default function PlaidConnectStep({ userId, onNext }: PlaidConnectStepProps) {
  const [linkToken, setLinkToken] = useState<string | null>(null);
  const [status, setStatus] = useState<ConnectionStatus>('idle');
  const [error, setError] = useState<string | null>(null);
  const [institutionName, setInstitutionName] = useState<string>('');

  // Fetch link token on mount
  useEffect(() => {
    const fetchLinkToken = async () => {
      setStatus('loading');
      setError(null);

      try {
        const response = await fetch('/api/plaid/create-link-token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId }),
        });

        if (!response.ok) {
          throw new Error('Failed to create link token');
        }

        const data = await response.json();
        setLinkToken(data.link_token);
        setStatus('ready');
      } catch (err) {
        console.error('Error fetching link token:', err);
        setError('Failed to initialize bank connection. Please try again.');
        setStatus('error');
      }
    };

    fetchLinkToken();
  }, [userId]);

  // Handle Plaid success
  const onSuccess = useCallback(
    async (publicToken: string, metadata: { institution?: { name?: string } }) => {
      setStatus('connecting');
      setInstitutionName(metadata.institution?.name || 'Your bank');

      try {
        const response = await fetch('/api/plaid/exchange-token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            publicToken,
            userId,
            institutionName: metadata.institution?.name,
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to exchange token');
        }

        setStatus('success');
      } catch (err) {
        console.error('Error exchanging token:', err);
        setError('Failed to connect your bank. Please try again.');
        setStatus('error');
      }
    },
    [userId]
  );

  // Handle Plaid exit
  const onExit = useCallback(() => {
    // User exited without connecting
    if (status !== 'success') {
      setStatus('ready');
    }
  }, [status]);

  // Initialize Plaid Link
  const { open, ready } = usePlaidLink({
    token: linkToken,
    onSuccess,
    onExit,
  });

  const handleConnect = () => {
    if (ready) {
      open();
    }
  };

  const handleRetry = async () => {
    setStatus('loading');
    setError(null);

    try {
      const response = await fetch('/api/plaid/create-link-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId }),
      });

      if (!response.ok) {
        throw new Error('Failed to create link token');
      }

      const data = await response.json();
      setLinkToken(data.link_token);
      setStatus('ready');
    } catch (err) {
      console.error('Error fetching link token:', err);
      setError('Failed to initialize bank connection. Please try again.');
      setStatus('error');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-md mx-auto px-4"
    >
      <div className="text-center mb-8">
        {/* Icon based on status */}
        <div
          className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300 ${
            status === 'success'
              ? 'bg-green-500'
              : 'bg-gradient-to-br from-navy-dark to-teal'
          }`}
        >
          {status === 'success' ? (
            <motion.svg
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-8 h-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </motion.svg>
          ) : (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          )}
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-navy-dark mb-2">
          {status === 'success' ? 'Account Connected!' : 'Connect Your Bank'}
        </h2>
        <p className="text-gray-600">
          {status === 'success'
            ? `${institutionName} has been securely connected`
            : 'Securely link your accounts with bank-level encryption'}
        </p>
      </div>

      {/* Trust Badges */}
      {status !== 'success' && (
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <div className="flex items-center gap-1.5 text-xs text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full">
            <svg className="w-4 h-4 text-teal" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            256-bit encryption
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full">
            <svg className="w-4 h-4 text-teal" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Read-only access
          </div>
        </div>
      )}

      {/* Powered by Plaid */}
      {status !== 'success' && (
        <div className="text-center mb-6">
          <p className="text-xs text-gray-400">
            Powered by <span className="font-semibold">Plaid</span> · Trusted by millions
          </p>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-lg mb-4">
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}

      {/* Action Buttons */}
      <div className="space-y-3">
        {status === 'success' ? (
          <motion.button
            onClick={onNext}
            className="btn-primary w-full"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            Continue
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </motion.button>
        ) : (
          <motion.button
            onClick={status === 'error' ? handleRetry : handleConnect}
            disabled={status === 'loading' || status === 'connecting' || (!ready && status !== 'error')}
            className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={
              status === 'loading' || status === 'connecting'
                ? {}
                : { scale: 1.02, y: -2 }
            }
            whileTap={
              status === 'loading' || status === 'connecting'
                ? {}
                : { scale: 0.98 }
            }
            transition={{ duration: 0.2 }}
          >
            {status === 'loading' && (
              <>
                <svg
                  className="animate-spin w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Initializing...
              </>
            )}
            {status === 'ready' && (
              <>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
                Connect Bank Account
              </>
            )}
            {status === 'connecting' && (
              <>
                <svg
                  className="animate-spin w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Connecting...
              </>
            )}
            {status === 'error' && (
              <>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                Try Again
              </>
            )}
          </motion.button>
        )}
      </div>

      {/* Success Animation Indicator */}
      {status === 'success' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg
                className="w-5 h-5 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div>
              <p className="font-medium text-green-800">{institutionName}</p>
              <p className="text-sm text-green-600">Successfully connected</p>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
