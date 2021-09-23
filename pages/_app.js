import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../site-settings/theme'
import RTL from '../site-settings/RTL'
import { IntlProvider } from 'react-intl';
import messages from '../site-settings/site-transitions';
import "styles/globals.css"

const locale = "ar"


export default function MyApp(props) {
    const {Component, pageProps} = props

    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side')
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles)
        }
    }, [])

    return (
        <React.Fragment>
            <Head>
                <title>JAGUnext</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
            </Head>
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <IntlProvider locale={locale} messages={messages[locale]}>
                    <RTL>
                        <CssBaseline/>
                        <Component {...pageProps} />
                    </RTL>
                </IntlProvider>
            </ThemeProvider>
        </React.Fragment>
    )
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired,
}
