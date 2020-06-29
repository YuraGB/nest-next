import Document, {
    DocumentContext,
    DocumentInitialProps,
    Head,
    Main,
    NextScript
} from 'next/document'

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <html>
            <Head>
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
            </html>
        )
    }
}