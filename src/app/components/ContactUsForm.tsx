'use client'

import { ErrorMessage, Field, Form, Formik } from 'formik'
import { PersistFormikValues } from 'formik-persist-values'
import Image from 'next/image'
import toast from 'react-hot-toast'
import * as Yup from 'yup'

interface MyFormValues {
  name: string
  email: string
  number: string
  message: string
}

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .matches(/^[A-Za-zА-ЯІЇа-яіїЁё\s]+$/, 'Wrong Fullname')
    .min(3, 'Enter at least three characters')
    .max(60, 'Maximum 60 characters allowed'),
  email: Yup.string()
    .required('Email is required')
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/,
      'Wrong Email',
    ),
  number: Yup.string()
    .required('Phone number is required')
    .matches(/^380\d{9}$/, 'Wrong Phone'),
})

const ContactUsForm = () => {
  const initialValues: MyFormValues = {
    name: '',
    email: '',
    number: '',
    message: '',
  }

  const handleSubmit = async (values: MyFormValues) => {
    values.name = ''
    values.email = ''
    values.number = ''
    values.message = ''
    sessionStorage.removeItem('contact-form')
    toast.success('Очікуйте на контакт з менеджером...', {
      style: {
        borderRadius: '10px',
        background: '#fff',
        color: '#333',
      },
    })
  }

  return (
    <div className='w-[596px] max-xl:w-[342px] max-lg:w-full bg-light-grey xl:p-[48px] max-lg:px-[12px] max-xl:px-[24px] max-xl:py-[36px]'>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, touched, errors, isValidating, dirty, isValid }) => (
          <Form className='flex w-full flex-col items-end justify-center gap-[28px] max-xl:gap-[26px]'>
            <div className='relative w-full flex flex-col gap-[12px] max-xl:gap-[7px]'>
              <label>* Full name:</label>
              <Field
                type='text'
                id='name'
                name='name'
                className={`h-[33px] text-lg max-xl:text-md w-full border-b-[1px] border-medium-green bg-light-grey pb-[8px] ${
                  touched.name && errors.name ? 'border-light-red' : ''
                }`}
                autoComplete='off'
                placeholder='John Rosie'
              />
              <ErrorMessage
                name='name'
                component='div'
                className=' absolute bottom-[-26px] right-[-4px] text-xs font-normal tracking-[-0.48px] text-light-red'
              />
            </div>
            <div className='relative w-full flex flex-col gap-[12px] max-xl:gap-[7px]'>
              <label>* Email:</label>
              <Field
                type='email'
                id='email'
                name='email'
                className={`h-[33px] text-lg max-xl:text-md w-full border-b-[1px] border-medium-green bg-light-grey pb-[8px] ${
                  touched.email && errors.email ? 'border-light-red' : ''
                }`}
                autoComplete='off'
                placeholder='johnrosie@gmail.com'
              />
              <ErrorMessage
                name='email'
                component='div'
                className='absolute bottom-[-26px] right-[-4px] text-xs font-normal tracking-[-0.48px] text-light-red'
              />
            </div>
            <div className='relative w-full flex flex-col gap-[12px] max-xl:gap-[7px]'>
              <label>* Phone:</label>
              <Field
                type='text'
                id='number'
                name='number'
                className={`h-[33px] text-lg max-xl:text-md w-full border-b-[1px] border-medium-green bg-light-grey pb-[8px] ${
                  touched.number && errors.number ? 'border-light-red' : ''
                }`}
                autoComplete='off'
                placeholder='380961234567'
              />
              <ErrorMessage
                name='number'
                component='div'
                className=' absolute bottom-[-26px] right-[-4px] text-xs font-normal tracking-[-0.48px] text-light-red'
              />
            </div>

            <div className='relative w-full flex flex-col gap-[12px] max-xl:gap-[7px]'>
              <label>Message:</label>
              <Field
                as='textarea'
                id='message'
                name='message'
                className='h-[149px] max-xl:h-[139px] text-lg max-xl:text-md w-full border-b-[1px] border-medium-green bg-light-grey pb-[8px]'
                autoComplete='off'
                placeholder='My message...'
              />
            </div>
            <button
              type='submit'
              disabled={isSubmitting || !isValid || !dirty || isValidating}
              className={`${
                !isValid || !dirty || isValidating
                  ? 'pointer-events-none opacity-70'
                  : ''
              } flex  group items-center gap-[6px] border-solid text-medium-green border-[1px] transition-colors ease-in-out duration-300 hover:bg-primary-green focus:bg-primary-green p-1 pl-4 rounded-[500px]`}
            >
              <span className='transition-colors ease-in-out text-primary-green  duration-300 group-hover:text-medium-green group-focus:text-medium-green'>
                Send
              </span>
              <span className='bg-medium-green p-2 rounded-full'>
                <Image
                  className='rotate-180'
                  src={'/icons/arrow-right.svg'}
                  width={16}
                  height={16}
                  alt='Arrow bottom'
                />
              </span>
            </button>
            <PersistFormikValues
              storage='sessionStorage'
              persistInvalid
              name='contact-form'
            />
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default ContactUsForm
