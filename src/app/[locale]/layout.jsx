import Layout from '@/components/templates/Layout';
import '../../styles/style.scss';
import '../../styles/tailwind.css';

import { NextIntlClientProvider, useMessages } from 'next-intl';
import Head from 'next/head';

export const metadata = {
    title: "طيب الحور | بخور درهم الاماراتي (عروض العيد الوطني بكمية محدودة 😍🇦🇪🇦🇪",
    description: "يستخدم في التعطير الشخصي وتبخير المنازل والمكاتب والسيارة، يتمتع برائحة هادئة تلطف الأجواء وتبعث الراحة والطمأنينة في النفس مما يجعله مثالي في المناسبات الخاصة والعزائم.",
    icons: { icon: '/imgs/logo.webp' },
    openGraph: {
        title: "طيب الحور | بخور درهم الاماراتي (عروض العيد الوطني بكمية محدودة 😍🇦🇪🇦🇪",
        description: "يستخدم في التعطير الشخصي وتبخير المنازل والمكاتب والسيارة، يتمتع برائحة هادئة تلطف الأجواء وتبعث الراحة والطمأنينة في النفس مما يجعله مثالي في المناسبات الخاصة والعزائم.",
        url: 'https://landing-22.vercel.app/',
        type: 'website',
        images: [
            {
                url: 'https://landing-22.vercel.app/imgs/logo.webp',
                width: 1200,
                height: 630,
                alt: "طيب الحور | بخور درهم الاماراتي (عروض العيد الوطني بكمية محدودة 😍🇦🇪🇦🇪"
            },
        ],
    }
};

export default function RootLayout({ children, params: { locale } }) {
    const messages = useMessages();

    return (
        <html lang={locale} dir={locale == 'en' ? 'ltr' : 'rtl'}>
            <Head> 
            <meta property="og:title" content="طيب الحور | بخور درهم الاماراتي (عروض العيد الوطني بكمية محدودة 😍🇦🇪🇦🇪" />
    <meta property="og:description" content="يستخدم في التعطير الشخصي وتبخير المنازل والمكاتب والسيارة، يتمتع برائحة هادئة تلطف الأجواء وتبعث الراحة والطمأنينة في النفس مما يجعله مثالي في المناسبات الخاصة والعزائم." />
    <meta property="og:image" content="https://landing-22.vercel.app/imgs/logo.webp" />
    <meta property="og:url" content="https://landing-22.vercel.app/" />
    <meta property="og:type" content="website" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="طيب الحور | بخور درهم الاماراتي (عروض العيد الوطني بكمية محدودة 😍🇦🇪🇦🇪" />
    <meta name="twitter:description" content="يستخدم في التعطير الشخصي وتبخير المنازل والمكاتب والسيارة، يتمتع برائحة هادئة تلطف الأجواء وتبعث الراحة والطمأنينة في النفس مما يجعله مثالي في المناسبات الخاصة والعزائم." />
    <meta name="twitter:image" content="https://landing-22.vercel.app/imgs/logo.webp" />
            </Head>

            <body className=' '>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <main>
                        <Layout> {children} </Layout>
                    </main>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
