'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { createClient, EntityType } from '@/lib/supabase';

const businessInfoSchema = z.object({
  businessName: z.string().min(1, 'Business name is required').max(100, 'Business name is too long'),
  entityType: z.enum(['LLC', 'S-Corp', 'C-Corp', 'Sole Prop', 'Partnership'], {
    required_error: 'Please select an entity type',
  }),
});

type BusinessInfoFormData = z.infer<typeof businessInfoSchema>;

interface BusinessInfoStepProps {
  userId: string;
  onNext: () => void;
  initialData?: {
    businessName?: string;
    entityType?: EntityType;
  };
}

export default function BusinessInfoStep({ userId, onNext, initialData }: BusinessInfoStepProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BusinessInfoFormData>({
    resolver: zodResolver(businessInfoSchema),
    defaultValues: {
      businessName: initialData?.businessName || '',
      entityType: initialData?.entityType,
    },
  });

  const onSubmit = async (data: BusinessInfoFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const supabase = createClient();

      const { error } = await supabase
        .from('profiles')
        .update({
          business_name: data.businessName,
          entity_type: data.entityType,
          updated_at: new Date().toISOString(),
        })
        .eq('id', userId);

      if (error) {
        throw error;
      }

      onNext();
    } catch (error) {
      console.error('Error saving business info:', error);
      setSubmitError('Failed to save your information. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const entityTypes: { value: EntityType; label: string }[] = [
    { value: 'LLC', label: 'LLC' },
    { value: 'S-Corp', label: 'S-Corp' },
    { value: 'C-Corp', label: 'C-Corp' },
    { value: 'Sole Prop', label: 'Sole Proprietorship' },
    { value: 'Partnership', label: 'Partnership' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-md mx-auto px-4"
    >
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-br from-navy-dark to-teal rounded-full flex items-center justify-center mx-auto mb-4">
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
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-navy-dark mb-2">
          Quick Business Info
        </h2>
        <p className="text-gray-600">
          Tell us a bit about your business
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Business Name */}
        <div>
          <label
            htmlFor="businessName"
            className="block text-sm font-medium text-navy-dark mb-2"
          >
            Business Name
          </label>
          <input
            {...register('businessName')}
            type="text"
            id="businessName"
            placeholder="Enter your business name"
            className={`w-full h-14 px-4 border rounded-xl text-base
              placeholder:text-[rgba(26,7,16,0.65)]
              focus:outline-none focus:border-navy-dark transition-colors
              ${errors.businessName ? 'border-red-500' : 'border-[#dddddd]'}`}
          />
          {errors.businessName && (
            <p className="mt-1 text-sm text-red-500">{errors.businessName.message}</p>
          )}
        </div>

        {/* Entity Type */}
        <div>
          <label
            htmlFor="entityType"
            className="block text-sm font-medium text-navy-dark mb-2"
          >
            Entity Type
          </label>
          <select
            {...register('entityType')}
            id="entityType"
            className={`w-full h-14 px-4 border rounded-xl text-base
              bg-white appearance-none cursor-pointer
              focus:outline-none focus:border-navy-dark transition-colors
              ${errors.entityType ? 'border-red-500' : 'border-[#dddddd]'}
              ${!register('entityType').name ? 'text-[rgba(26,7,16,0.65)]' : 'text-navy-dark'}`}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%231E1A2A'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 1rem center',
              backgroundSize: '1.5rem',
            }}
          >
            <option value="">Select entity type</option>
            {entityTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
          {errors.entityType && (
            <p className="mt-1 text-sm text-red-500">{errors.entityType.message}</p>
          )}
        </div>

        {/* Error Message */}
        {submitError && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-600">{submitError}</p>
          </div>
        )}

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
          whileHover={isSubmitting ? {} : { scale: 1.02, y: -2 }}
          whileTap={isSubmitting ? {} : { scale: 0.98 }}
          transition={{ duration: 0.2 }}
        >
          {isSubmitting ? (
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
              Saving...
            </>
          ) : (
            <>
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
            </>
          )}
        </motion.button>
      </form>
    </motion.div>
  );
}
