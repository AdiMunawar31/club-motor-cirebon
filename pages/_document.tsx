import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html lang='en'>
				<Head>
					<meta name='description' content='Club Motor Cirebon' />
					<meta name='keywords' content='Junior Web Developer, Next JS, Tailwind CSS' />
					<meta name='theme-color' content='#2563eb' />
					<link rel='shortcut icon' href='/logo.png' type='image/x-icon' />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
