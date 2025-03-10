'use client';

import React from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
    name: string;
    email: string;
    phone: string;
    message: string;
};

const ContactUs = () => {
    const { register, handleSubmit } = useForm<FormData>();

    const sendEmail = async (data: FormData) => {
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Failed to send email');
            }

            alert('Email sent successfully!');
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Failed to send email. Please try again.');
        }
    };

    const onSubmit = async (data: FormData) => {
        await sendEmail(data);
    };

    return (
        <div className="w-screen h-screen bg-[var(--background)] flex flex-row lg:px-36 px-12 my-12 justify-center items-center gap-36">
            <img
                src="/taiv-evan-joseph.jpg"
                alt="taiv-evan-joseph"
                className="lg:w-[28rem] h-[36rem] rounded-2xl object-cover w-0 md:flex hidden"
            />
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-8 items-center justify-center">
                    <h2 className="text-4xl font-bold tracking-tighters">
                        CONTACT US
                    </h2>
                    <h4 className="text-md text-gray-500 mb-8">
                        Reach out for personalized solutions or to connect!
                    </h4>
                </div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-6"
                >
                    <input
                        {...register('name')}
                        type="text"
                        placeholder="Name:"
                        className="border border-[var(--text-secondary)] text-[var(--text-base)] placeholder:text-[var(--text-secondary)] 
                        rounded-md py-3 px-2"
                    />
                    <input
                        {...register('email')}
                        type="email"
                        placeholder="Email:"
                        className="border border-[var(--text-base)] text-[var(--text-base)] placeholder:text-[var(--text-base)] 
                        rounded-md py-3 px-2"
                    />
                    <input
                        {...register('phone')}
                        type="text"
                        placeholder="Phone Number:"
                        className="border border-[var(--text-base)] text-[var(--text-base)] placeholder:text-[var(--text-base)] 
                        rounded-md py-3 px-2"
                    />
                    <input
                        {...register('message')}
                        type="text"
                        placeholder="Message:"
                        className="border border-[var(--text-base)] text-[var(--text-base)] placeholder:text-[var(--text-base)] 
                        rounded-md py-3 px-2"
                    />
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-[var(--text-highlight)] text-[var(--text-base)] font-semibold text-md py-3.5 w-[180px]"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
