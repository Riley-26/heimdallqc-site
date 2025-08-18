'use client'

import { Footer, Header, Section } from '@/components/layout/index'
import SVGPulseGlow from '@/components/ui/ImgPulse'
import { ScrollWidget } from '@/components/ui/index'
import { ArrowForwardIos } from '@mui/icons-material'
import Image from 'next/image'

const sections = [
    { id: 'privacy', name: 'Privacy' },
    { id: 'policy', name: 'Data Policy' },
    { id: 'terms', name: 'T&Cs' },
]

export default function Privacy() {
    return (
        <>
            <Header />
            <ScrollWidget sections={sections} />
            {/* INTRO */}
            <Section id="privacy" className="section-start-area">
                <div className="foreground-z absolute top-[45%] right-[50%] translate-x-[50%] translate-y-[-50%] p-2">
                    <SVGPulseGlow className={"back-z opacity-30"} />
                </div>
                <div className="section-container-sm front-z text-center">
                    <h3 className="content-miniheading">PRIVACY</h3>
                    <h1 className="content-title mb-4">Our Privacy Policy</h1>
                    <h2 className="content-subtitle">We lead by example, with full transparency</h2>
                </div>
                <ArrowForwardIos className="absolute bottom-12" sx={{ fontSize: '32px', transform: 'rotate(90deg)' }} />
            </Section>
            {/* PRIVACY POLICY */}
            <Section id="policy" className="section-container flex min-h-screen flex-col justify-center gap-8">
                <div className="text-center">
                    <h3 className="content-miniheading">
                        <span className="text-[16px]">PRIVACY</span> — DATA POLICY
                    </h3>
                    <h2 className="content-title text-6xl">How we use your data</h2>
                    <div className='mt-16 content-body text-start section-container-sm bento-card flex flex-col gap-8'>
                        <span>Last updated: 18/08/25</span>
                        <div className='flex flex-col gap-4'>
                            <h3 className='content-subtitle'>PRIVACY POLICY</h3>
                            <p>
                                This Privacy Notice for Heimdall QC ('<strong>we</strong>', '<strong>us</strong>', or '<strong>our</strong>'), describes how and why we might access, collect, store, use, and/or share ('<strong>process</strong>') your personal information when you use our services ('<strong>Services</strong>'), including when you:
                            </p>
                            <ul className='list-disc ml-8 flex flex-col gap-2'>
                                <li>Visit our website at <a className='text-link text-blue-400' href="http://www.heimdallqc.com">http://www.heimdallqc.com</a> or any website of ours that links to this Privacy Notice</li>
                                <li>Use Heimdall QC - AI Content Verification. An automated end-to-end quality control service, which identifies and takes action on plagiarism and problematic content.</li>
                                <li>Engage with us in other related ways, including any sales, marketing, or events</li>
                            </ul>
                            <p>
                                <strong>Questions or concerns?</strong> Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at privacy@heimdallqc.com
                            </p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h3 className='content-subtitle'>SUMMARY OF KEY POINTS</h3>
                            <p className='text-neutral-400 italic'>
                                This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.
                            </p>
                            <p>
                                <strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. Learn more about personal information you disclose to us.
                            </p>
                            <p>
                                <strong>Do we process any sensitive personal information?</strong> Some of the information may be considered 'special' or 'sensitive' in certain jurisdictions, for example your racial or ethnic origins, sexual orientation, and religious beliefs. We do not process sensitive personal information.
                            </p>
                            <p>
                                <strong>Do we collect any information from third parties?</strong> We do not collect any information from third parties.
                            </p>
                            <p>
                                <strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.
                                We process your information only when we have a valid legal reason to do so. Learn more about how we process your information.
                            </p>
                            <p>
                                <strong>In what situations and with which parties do we share personal information?</strong> We may share information in specific situations and with specific third parties. Learn more about when and with whom we share your personal information.
                            </p>
                            <p>
                                <strong>How do we keep your information safe?</strong> We have adequate organisational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorised third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Learn more about how we keep your information safe.
                            </p>
                            <p>
                                <strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Learn more about your privacy rights.
                            </p>
                            <p>
                                <strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by submitting a data subject access request, or by contacting us. We will consider and act upon any request in accordance with applicable data protection
                            </p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h3 className='content-subtitle'>1. WHAT INFORMATION DO WE COLLECT?</h3>
                            <strong>Personal information you disclose to us</strong>
                            <p className='italic'>
                                <strong>In Short</strong>: We collect personal information that you provide to us.
                            </p>
                            <p>
                                We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
                                Personal Information Provided by You. The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:
                                • names
                                • phone numbers
                                • email addresses
                                • mailing addresses
                                • usernames
                                • passwords
                                • contact preferences
                                • contact or authentication data
                                • billing addresses
                                • debit/credit card numbers
                                Sensitive Information. We do not process sensitive information.
                                Payment Data. We may collect data necessary to process your payment if you choose to make purchases, such as your payment instrument number, and the security code associated with your payment instrument. All payment data is handled and stored by Stripe. You may find their privacy notice link(s) here: https://stripe.com/gb/privacy.
                                All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.
                            </p>
                            <p>
                                Information automatically collected
                                In Short: Some information - such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.
                                We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.
                                The information we collect includes:
                                • Log and Usage Data. Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called 'crash dumps), and hardware settings).
                                • Device Data. We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.
                                
                            </p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h3 className='content-subtitle'>2. HOW DO WE PROCESS YOUR INFORMATION?</h3>
                            <p>
                                In Short: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.
                            </p>
                            <p>
                                We process your personal information for a variety of reasons, depending on how you interact with our Services, including:
                            </p>
                            <ul className='list-disc ml-8 flex flex-col gap-2'>
                                <li>To facilitate account creation and authentication and otherwise manage user accounts. We may process your information so you can create and log in to your account, as well as keep your account in working order.</li>
                                <li>To deliver and facilitate delivery of services to the user. We may process your information to provide you with the requested service.</li>
                                <li>To respond to user inquiries/offer support to users. We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.</li>
                                <li>To send administrative information to you. We may process your information to send you details about our products and services, changes to our terms and policies, and other similar information.</li>
                                <li>To fulfil and manage your orders. We may process your information to fulfil and manage your orders, payments, returns, and exchanges made through the Services.</li>
                                <li>To save or protect an individual's vital interest. We may process your information when necessary to save or protect an individual's vital interest, such as to prevent harm.</li>
                                <li>To verify user identity/prevent fraud. Prevents unauthorised access.</li>
                                <li>To maintain account security. Monitors for suspicious activity and password resets.</li>
                                <li>To provide customer support. Accessing account details to help troubleshoot issues.</li>
                                <li>To improve our service. Analysing usage patterns to fix bugs and add features.</li>
                                <li>To provide analytics. Records activity of our service to show users how it is working.</li>
                                <li>To personalise user experience. Customises interface, preferences and settings.</li>
                                <li>To process payments/manage billing. Handles subscriptions, purchases, invoices and payment failures.</li>
                                <li>To send important service updates. Maintenance notifications, security and service alerts and policy changes.</li>
                                <li>To comply with legal obligations. Tax records, data retention and law enforcement.</li>
                                <li>To conduct surveys and gather feedback. Improves service based on user input.</li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h3 className='content-subtitle'>3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?</h3>
                            <p>
                                In Short: We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e. legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfil our contractual obligations, to protect your rights, or to fulfil our legitimate business interests.   
                            </p>
                            <p>
                                The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:
                            </p>         
                            <ul>
                                <li>Consent. We may process your information if you have given us permission (i.e. consent) to use your personal information for a specific purpose. You can withdraw your consent at any time. Learn more about withdrawing your consent.</li>
                                <li>Performance of a Contract. We may process your personal information when we believe it is necessary to fulfil our contractual obligations to you, including providing our Services or at your request prior to entering into a contract with you.</li>
                                <li>Legal Obligations. We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved.</li>
                                <li>Vital Interests. We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.</li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h3 className='content-subtitle'>4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h3>
                            <p>
                                In Short: We may share information in specific situations described in this section and/or with the following third parties.
                            </p>
                            <p>
                                Vendors, Consultants, and Other Third-Party Service Providers. We may share your data with third-party vendors, service providers, contractors, or agents ('third parties') who perform services for us or on our behalf and require access to such information to do that work.
                                We have contracts in place with our third parties, which are designed to help safeguard your personal information. This means that they cannot do anything with your personal information unless we have instructed them to do it. They will also not share your personal information with any organisation apart from us. They also commit to protect the data they hold on our behalf and to retain it for the period we instruct.
                            </p>
                            <p>
                                The third parties we may share personal information with are as follows:
                            </p>
                            <ul>
                                <li>Invoice and Billing</li>
                            </ul>
                            <p>Stripe</p>
                            <p>We also may need to share your personal information in the following situations:</p>
                            <ul>
                                <li>Business Transfers. We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h3>5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h3>
                            <p>
                                In Short: We may use cookies and other tracking technologies to collect and store your information.
                            </p>
                            <p>
                                We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information when you interact with our Services. Some online tracking technologies help us maintain the security of our Services and your account, prevent crashes, fix bugs, save your preferences, and assist with basic site functions.
                            </p>
                            <p>
                                We also permit third parties and service providers to use online tracking technologies on our Services for analytics and advertising, including to help manage and display advertisements, to tailor advertisements to your interests, or to send abandoned shopping cart reminders (depending on your communication preferences). The third parties and service providers use their technology to provide advertising about products and services tailored to your interests which may appear either on our Services or on other websites.
                            </p>
                            <p>
                                Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.
                            </p>
                            <h3>Google Analytics</h3>
                            <p>
                                We may share your information with Google Analytics to track and analyse the use of the Services. To opt out of being tracked by Google Analytics across the Services, visit https://tools.google.com/dlpage/gaoptout. For more information on the privacy practices of Google, please visit the Google Privacy & Terms page.
                            </p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h3>6. DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?</h3>
                            <p>
                                In Short: We offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies.
                            </p>
                            <p>
                                As part of our Services, we offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies (collectively, 'Al Products'). These tools are designed to enhance your experience and provide you with innovative solutions. The terms in this Privacy Notice govern your use of the AI Products within our Services.
                            </p>
                            <p>
                                Use of AI Technologies
                            </p>
                            <p>
                                We provide the AI Products through third-party service providers ('Al Service Providers'), including OpenAl and WinstonAl. As outlined in this Privacy Notice, your input, output, and personal information will be shared with and processed by these AI Service Providers to enable your use of our AI Products for purposes outlined in 'WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?' You must not use the AI Products in any way that violates the terms or policies of any AI Service Provider.
                            </p>
                            <p>
                                Our AI Products
                            </p>
                            <p>
                                Our AI Products are designed for the following functions:
                            </p>
                            <ul>
                                <li>Text generation</li>
                                <li>Text analysis</li>
                            </ul>
                            <p>
                                How We Process Your Data Using AI
                            </p>
                            <p>
                                All personal information processed using our AI Products is handled in line with our Privacy Notice and our agreement with third parties.
                                This ensures high security and safeguards your personal information throughout the process, giving you peace of mind about your data's safety.
                            </p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h3>7. HOW LONG DO WE KEEP YOUR INFORMATION?</h3>
                            <p>
                                In Short: We keep your information for as long as necessary to fulfil the purposes outlined in this Privacy Notice unless otherwise required by law.
                            </p>
                            <p>
                                We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us.
                            </p>
                            <p>
                                When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymise such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
                            </p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h3>8. HOW DO WE KEEP YOUR INFORMATION SAFE?</h3>
                            <p>
                                In Short: We aim to protect your personal information through a system of organisational and technical security measures.
                            </p>
                            <p>
                                We have implemented appropriate and reasonable technical and organisational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorised third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.
                            </p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h3>9. DO WE COLLECT INFORMATION FROM MINORS?</h3>
                            <p>
                                In Short: We do not knowingly collect data from or market to children under 18 years of age. 
                            </p>
                            <p>
                                We do not knowingly collect, solicit data from, or market to children under 18 years of age, nor do we knowingly sell such personal information. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent's use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at privacy@heimdallqc.com.
                            </p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h3>10. WHAT ARE YOUR PRIVACY RIGHTS?</h3>
                            <p>
                                In Short: In some regions, such as the European Economic Area (EEA), United Kingdom (UK), and Switzerland, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time, depending on your country, province, or state of residence.
                            </p>
                            <p>
                                In some regions (like the EEA, UK, and Switzerland), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (i) to restrict the processing of your personal information; (iv) if applicable, to data portability; and (v) not to be subject to automated decision-making. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section 'HOW CAN YOU CONTACT US ABOUT THIS NOTICE?' below.
                            </p>
                            <p>
                                We will consider and act upon any request in accordance with applicable data protection laws.
                            </p>
                            <p>
                                If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your Member State data protection authority or UK data protection authority.
                            </p>
                            <p>
                                If you are located in Switzerland, you may contact the Federal Data Protection and Information Commissioner.
                            </p>
                            <p>
                                Withdrawing your consent: If we are relying on your consent to process your personal information, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section 'HOW CAN YOU CONTACT US ABOUT THIS NOTICE?' below.
                            </p>
                            <p>
                                However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.
                            </p>
                            <h3>Account Information</h3>
                            <p>
                                If you would at any time like to review or change the information in your account or terminate your account, you can:
                            </p>
                            <ul>
                                <li>Log in to your account settings and update your user account.</li>
                                <li>Contact us using the contact information provided.</li>
                            </ul>
                            <p>
                                Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases.
                                However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.
                            </p>
                            <p>
                                If you have questions or comments about your privacy rights, you may email us at privacy@heimdallqc.com.
                            </p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h3>11. CONTROLS FOR DO-NOT-TRACK FEATURES</h3>
                            <p>
                                Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ('DNT') feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognising and implementing DNT signals has been finalised. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Notice.
                            </p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h3>12. DO WE MAKE UPDATES TO THIS NOTICE?</h3>
                            <p>
                                In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.
                            </p>
                            <p>
                                We may update this Privacy Notice from time to time. The updated version will be indicated by an updated 'Revised' date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.
                            </p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h3>13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h3>
                            <p>
                                If you have questions or comments about this notice, you may email us at privacy@heimdallqc.com or contact us by post at:
                            </p>
                            <ul>
                                <li>Heimdall QC</li>
                                <li>United Kingdom</li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h3>14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h3>
                            <p>
                                Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. To request to review, update, or delete your personal information, please fill out and submit a data subject access request.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>
            {/* TERMS OF SERVICE */}
            <Section id="terms" className="section-container flex min-h-screen flex-col justify-center gap-8">
                <div className="text-center">
                    <h3 className="content-miniheading">
                        <span className="text-[16px]">PRIVACY</span> — T&Cs
                        
                    </h3>
                    <h2 className="content-title text-6xl">Our Terms of Service</h2>
                    <div className='mt-16 content-body text-start section-container-sm'>
                        <div>
                            <h3 className='content-subtitle'>1. Acceptance of Terms</h3>
                            <p></p>
                        </div>
                    </div>
                </div>
            </Section>
            <Footer />
        </>
    )
}
