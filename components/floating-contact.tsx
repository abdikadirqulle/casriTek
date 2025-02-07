"use client"

import { MessageCircle, X } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/hooks/use-toast"
import { sendEmail } from "@/lib/mail"
import { Resend } from "resend"
import { PulsatingButton } from "./ui/pulsating-button"

// Define the form schema
const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email").min(1, "Email is required"),
  message: z.string().min(1, "Message is required"),
})

type FormData = z.infer<typeof schema>

const resend = new Resend("re_RJF4i3Bw_7JTvR1dFyowf76W4o1mFhMjf")

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false)

  const [isSending, setIsSending] = useState(false)
  const whatsappNumber = "+252617797802" // Replace with your WhatsApp number
  const whatsappMessage = "Hello! I'm interested in your services."
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    setIsSending(true)
    try {
      const result = await sendEmail(data)

      if (result.success) {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you soon.",
          duration: 5000,
        })
        reset()
        setIsOpen(false)
      } else {
        alert("Failed to send message. Please try again.")
      }

      //     throw new Error("Failed to send message")
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again later.",
        variant: "destructive",
        duration: 5000,
      })
    } finally {
      setIsSending(false)
    }
  }

  const buttonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 260, damping: 20 },
    },
    hover: {
      scale: 1.1,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
    tap: { scale: 0.95 },
  }

  const chatBoxVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 20,
      transformOrigin: "bottom right",
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 20,
      transition: {
        duration: 0.2,
      },
    },
  }

  const inputVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.3,
      },
    }),
  }

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-4">
        {/* Live Chat Button */}
        <div className="relative">
          <AnimatePresence>
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg"
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
              aria-label="Toggle chat"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <MessageCircle className="h-6 w-6" />
              )}
            </motion.button>
          </AnimatePresence>

          {/* Chat Box */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="absolute bottom-16 right-0 w-72 overflow-hidden rounded-2xl bg-white/90 p-4 shadow-xl backdrop-blur-sm"
                variants={chatBoxVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <motion.div
                  className="mb-4 text-lg font-semibold text-gray-800"
                  variants={inputVariants}
                  custom={0}
                  initial="hidden"
                  animate="visible"
                >
                  Let&apos;s Chat
                </motion.div>
                <motion.p
                  className="mb-4 text-sm text-gray-600"
                  variants={inputVariants}
                  custom={1}
                  initial="hidden"
                  animate="visible"
                >
                  Hi there! 👋 How can we help you today?
                </motion.p>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-2"
                >
                  <motion.div
                    variants={inputVariants}
                    custom={2}
                    initial="hidden"
                    animate="visible"
                  >
                    <input
                      {...register("name")}
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-lg border border-gray-200 bg-white/50 px-4 py-2 text-sm backdrop-blur-sm transition-colors focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.name.message}
                      </p>
                    )}
                  </motion.div>
                  <motion.div
                    variants={inputVariants}
                    custom={3}
                    initial="hidden"
                    animate="visible"
                  >
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="Your email"
                      className="w-full rounded-lg border border-gray-200 bg-white/50 px-4 py-2 text-sm backdrop-blur-sm transition-colors focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </motion.div>
                  <motion.div
                    variants={inputVariants}
                    custom={4}
                    initial="hidden"
                    animate="visible"
                  >
                    <textarea
                      {...register("message")}
                      placeholder="Your message"
                      rows={3}
                      className="w-full rounded-lg border border-gray-200 bg-white/50 px-4 py-2 text-sm backdrop-blur-sm transition-colors focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.message.message}
                      </p>
                    )}
                  </motion.div>
                  <motion.button
                    type="submit"
                    disabled={isSending}
                    className="rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-2 text-sm font-medium text-white disabled:opacity-50"
                    variants={inputVariants}
                    custom={5}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSending ? "Sending..." : "Send Message"}
                  </motion.button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* WhatsApp Button */}
        <AnimatePresence>
          <motion.div
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
          >
            <Link
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>
      <Toaster />
    </>
  )
}
