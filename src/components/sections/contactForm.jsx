'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import SlideUp from '../animations/slideUp';
import Title from '../ui/title';
import { Button } from '../ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
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

const ContactForm = ({ color, inputColor }) => {
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
    <section className="container lg:mt-15 mt-9">
      <div
        className={`bg-primary lg:rounded-[30px] rounded-2xl px-3 relative z-[1]`}
      >
        <div
          className="absolute top-0 left-0 w-full h-full bg-contain bg-no-repeat opacity-20 z-[-1]"
          style={{
            backgroundImage: `url(/images/background/services-bg1-1.png)`,
          }}
        ></div>
        <div
          className={`max-w-[1320px] mx-auto lg:pt-[138px] pt-12 lg:pb-15 pb-10 rounded-[30px]`}
        >
          <div className="flex lg:flex-row flex-col justify-between items-center gap-12.5">
            {/* Left side content */}
            <div className="lg:w-[40%] w-full lg:pb-11">
              <SlideUp>
                <div
                  className={`w-[75px] h-[75px] rounded-lg flex justify-center items-center drop-shadow-3xl bg-white mb-3`}
                >
                  <Image
                    src={'/images/shapes/cro-icon.png'}
                    width={45}
                    height={50}
                    alt="map arrow"
                  />
                </div>
                <Title size={'5xl'} className={`md:leading-[140%] ${color}`}>
                  Step Up towards Digital Excellence, Get your FREE Website
                  Audit Today!
                </Title>
                <p className={`font-semibold mt-4 max-w-[449px] ${color}`}>
                  Receive an in-depth website performance report, including SEO
                  and UX details. Take the first step to enhancing your online
                  presence absolutely free of charge.
                </p>
              </SlideUp>
            </div>

            {/* Form section */}
            <div className="lg:w-[54%] w-full">
              <SlideUp>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4"
                  >
                    {form.formState.errors.root && (
                      <p className="text-red-500">
                        {form.formState.errors.root.message}
                      </p>
                    )}

                    <div className="flex flex-col gap-4 sm:flex-row">
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
                          <FormItem className="flex-1">
                            <FormControl>
                              <Input
                                placeholder="Your Name"
                                className={`w-full border-2 border-[#C0C0C0] ${inputColor}`}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
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
                          <FormItem className="flex-1">
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="Email"
                                className={`w-full border-2 border-[#C0C0C0] ${inputColor}`}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="flex flex-col gap-4 sm:flex-row">
                      <FormField
                        control={form.control}
                        name="phone"
                        rules={{
                          required: 'Phone number is required',
                          pattern: {
                            value: /^\d{10}$/,
                            message:
                              'Please enter a valid 10-digit phone number',
                          },
                        }}
                        render={({ field }) => (
                          <FormItem className="flex-1">
                            <FormControl>
                              <Input
                                type="tel"
                                placeholder="Phone Number"
                                className={`w-full border-2 border-[#C0C0C0] ${inputColor}`}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="service"
                        rules={{ required: 'Please select a service' }}
                        render={({ field }) => (
                          <FormItem className="flex-1">
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger
                                  className={`border-2 border-[#C0C0C0] ${inputColor} h-12.5 py-[18px] px-[25px] text-lg`}
                                >
                                  <SelectValue placeholder="Select a Service" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent
                                className={`${inputColor} bg-white text-black`}
                              >
                                {/* <SelectItem value="Search Engine Optimization">
                                  Search Engine Optimization
                                </SelectItem> */}
                                {servicesDataTwo.map(item => (
                                  <SelectItem
                                    value={item.service_name}
                                    key={item.id}
                                  >
                                    {item.service_name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

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
                              className={`${inputColor}`}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex justify-end">
                      <Button
                        variant="outline"
                        type="submit"
                        disabled={isSubmitting}
                        className="text-white border border-white hover:text-primary-foreground hover:bg-white"
                      >
                        {isSubmitting ? 'Sending...' : 'Send request'}
                      </Button>
                    </div>
                  </form>
                </Form>
              </SlideUp>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
