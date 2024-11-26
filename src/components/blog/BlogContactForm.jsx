'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { submitContactForm } from '@/app/actions/contact';
import { Textarea } from '@/components/ui/textarea';
import { servicesDataTwo } from '@/lib/fackData/servicesDataTwo';
import { AlertCircle } from 'lucide-react';

const BlogContactForm = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    },
  });

  async function onSubmit(values) {
    setIsSubmitting(true);
    try {
      const result = await submitContactForm(values);
      if (result.success) {
        router.push('/thank-you');
      } else {
        form.setError('root', {
          type: 'manual',
          message: result.error || 'Something went wrong. Please try again.',
        });
      }
    } catch (error) {
      form.setError('root', {
        type: 'manual',
        message: 'Something went wrong. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-bold mb-6">Get in Touch</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {form.formState.errors.root && (
            <div className="flex items-center gap-2 p-3 rounded-lg bg-red-50 text-red-600 text-sm">
              <AlertCircle className="h-4 w-4" />
              <p>{form.formState.errors.root.message}</p>
            </div>
          )}

          <FormField
            control={form.control}
            name="name"
            rules={{
              required: 'Name is required',
              minLength: {
                value: 2,
                message: 'Name must be at least 2 characters',
              },
            }}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Your Name"
                    className={`w-full border border-gray-200 ${
                      form.formState.errors.name
                        ? 'border-red-500 focus-visible:ring-red-500'
                        : ''
                    }`}
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Please enter a valid email',
              },
            }}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Email"
                    className={`w-full border border-gray-200 ${
                      form.formState.errors.email
                        ? 'border-red-500 focus-visible:ring-red-500'
                        : ''
                    }`}
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            rules={{
              required: 'Phone number is required',
              pattern: {
                value: /^\d{10}$/,
                message: 'Please enter a valid 10-digit phone number',
              },
            }}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    className={`w-full border border-gray-200 ${
                      form.formState.errors.phone
                        ? 'border-red-500 focus-visible:ring-red-500'
                        : ''
                    }`}
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="service"
            rules={{ required: 'Please select a service' }}
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger
                      className={`border border-gray-200 ${
                        form.formState.errors.service
                          ? 'border-red-500 focus-visible:ring-red-500'
                          : ''
                      }`}
                    >
                      <SelectValue placeholder="Select a Service" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {servicesDataTwo.map(item => (
                      <SelectItem value={item.service_name} key={item.id}>
                        {item.service_name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            rules={{
              required: 'Message is required',
              minLength: {
                value: 10,
                message: 'Message must be at least 10 characters',
              },
            }}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Message"
                    className={`border border-gray-200 ${
                      form.formState.errors.message
                        ? 'border-red-500 focus-visible:ring-red-500'
                        : ''
                    }`}
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-white hover:bg-primary/90"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default BlogContactForm;
