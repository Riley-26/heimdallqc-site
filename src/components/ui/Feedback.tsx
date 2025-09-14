import { Close, FeedbackRounded } from '@mui/icons-material'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import { Button, IconContainer } from '@/components/ui'

export const Feedback: React.FC = () => {
    const [open, setOpen] = useState(false)
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const sendFeedback = async () => {
        try {
            await fetch("/api/email/receive-email", {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    message: message
                })
            })
        } catch (err: unknown) {
            return
        }
    }

    return (
        <div>
            {/* Fixed Button */}
            <AnimatePresence>
                {!open && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.2 }}
                    >
                        <IconContainer
                            className="front-z fixed right-8 bottom-8 min-h-[72px] min-w-[72px] cursor-pointer rounded-full"
                            onClick={() => setOpen(true)}
                            aria-label="Give Feedback"
                        >
                            <FeedbackRounded />
                        </IconContainer>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Feedback Form */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        className="content-body bento-card z-101 fixed right-8 bottom-8 w-[350px] drop-shadow-xl"
                        initial={{
                            opacity: 0,
                            scale: 0.5,
                            transformOrigin: 'bottom right',
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                        }}
                        exit={{
                            opacity: 0,
                            scale: 0.5,
                        }}
                        transition={{
                            duration: 0.2,
                            ease: 'easeOut',
                        }}
                    >
                        <button className="absolute top-4 right-4 cursor-pointer bg-none text-2xl" onClick={() => setOpen(false)} aria-label="Close">
                            <Close />
                        </button>
                        <h3 className="m-0 text-xl">Give Feedback</h3>
                        <motion.form
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="mt-4 flex flex-col gap-4"
                            style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 12 }}
                            onSubmit={(e) => {
                                e.preventDefault()
                                // Handle submit here
                                sendFeedback()
                                setOpen(false)
                                setEmail('')
                                setMessage('')
                            }}
                        >
                            <input
                                className='px-3 py-2 rounded-md text-base border border-neutral-500'
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <textarea
                                className='px-3 py-2 rounded-md text-base border border-neutral-500 resize-y'
                                placeholder="Message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                                rows={4}
                            />
                            <Button full value="Send" className='h-12 flex justify-center items-center' />
                        </motion.form>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Feedback
