import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import Link from 'next-translate/Link';
import i18nConfig from "../i18n.json";
import styled from "styled-components";
import useDarkMode from "use-dark-mode";
import { FaTwitter, FaLinkedin, FaSpotify, FaMoon, FaSun } from "react-icons/fa";

const { allLanguages } = i18nConfig;

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
`
const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
  background-color: ${props => props.theme.color.background};
  width: 100vw;
  min-height: 96vh;
`

const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 7rem;
`
const Footer = styled.div`
  background-color: ${props => props.theme.color.background};
  border-top: 1px solid ${props => props.theme.color.accent};
  width: 100vw;
  min-height: 2vh;
  padding: 1rem;
`

const Logo = styled.img`
  max-height: 7rem;
  max-width: 7rem;
  margin-top: 10vh;
  margin-bottom: 6rem;
`

const DarkLogo = styled(Logo)`
  display: ${props => props.theme.darkModeDisplay};
`

const LightLogo = styled(Logo)`
  display: ${props => props.theme.lightModeDisplay};
`

const FadeIcon = styled.i``

const Toggle = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  font-size: 1.2rem;
  background-color: ${props => props.theme.color.background};
  color: ${props => props.theme.color.text};
  padding: 0.4rem;
  border-radius: 0.4rem;
`
const DarkToggle = styled(Toggle)`
  display: ${props => props.theme.darkModeDisplay};
`

const LightToggle = styled(Toggle)`
  display: ${props => props.theme.lightModeDisplay};
`

const Button = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 0.8rem;
  font-weight: 700;
  min-width: 6.5rem;
  text-transform: uppercase;
  text-align: left;
  text-decoration: none;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  font-size: 1.2rem;
  background-color: ${props => props.theme.color.background};
  border: 1px solid ${props => props.theme.color.accent};
  color: ${props => props.theme.color.text};
  &:hover {
    background-color: ${props => props.theme.color.text};
    color: ${props => props.theme.color.background};
  }
`

const FlagIcon = styled.img`
  width: 2rem;
  height: 1.334rem;
`

const Label = styled.b`
  margin-left: 0.5rem;
  font-size: 0.8rem;
`

export default function Home() {
  const { t, lang } = useTranslation();
  const darkMode = useDarkMode();
  
  const title = t`common:title`;
  const description = t`common:description`;
  const keywords = t`common:keywords`;
  const pageURL = t`common:pageURL`;
  const ogImageURL = t`common:ogImageURL`;
  const logoAltText = t`common:logoAltText`;
  const linkedInURL = t`common:linkedInURL`;
  const twitterURL = t`common:twitterURL`;
  const spotifyURL = t`common:spotifyURL`;
  const changeLanguage = t`common:changeLanguage`;
  const changeFlag = t`common:changeFlag`;
  const linkedInText = t`common:linkedInText`;
  const twitterText = t`common:twitterText`;
  const spotifyText = t`common:spotifyText`;

  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="canonical" href={pageURL} />
        <meta name="robots" content="index, follow" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />

        <meta property="og:type" content="profile" />
        <meta property="og:profile:first_name" content="Anubis" />
        <meta property="og:profile:last_name" content="Watal" />
        <meta property="og:profile:username" content="@anubiswatal" />
        <meta property="og:profile:gender" content="male" />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImageURL} />
        <meta property="og:url" content={pageURL} />
        <meta property="og:site_name" content="anubis.me" />

        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImageURL} />
        <meta name="twitter:site" content="@anubiswatal" />
        <meta name="twitter:creator" content="@anubiswatal" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <body>
        <Container>
          <Top>
            <DarkLogo src="logo.svg" alt={logoAltText} />
            <LightLogo src="logo_light.svg" alt={logoAltText} />
            <Button href={linkedInURL}>
              <FaLinkedin /><Label>{linkedInText}</Label>
            </Button>
            <Button href={twitterURL}>
              <FaTwitter /><Label>{twitterText}</Label>
            </Button>
            <Button href={spotifyURL}>
              <FaSpotify /><Label>{spotifyText}</Label>
            </Button>
            <Bottom>
              <DarkToggle onClick={darkMode.toggle}><FaMoon /></DarkToggle>
              <LightToggle onClick={darkMode.toggle}><FaSun /></LightToggle>
              <Link href="/" lang={changeLanguage}>
                <FlagIcon src={`http://catamphetamine.gitlab.io/country-flag-icons/3x2/${changeFlag}.svg`}></FlagIcon>
              </Link>
            </Bottom>
          </Top>
        </Container>
      </body>
    </div>
  );
}
