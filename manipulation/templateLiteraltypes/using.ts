type World1 = 'world' | 'Everyone'
type Greeting1<T extends World1> = `hello ${T}`;

type HelloWorld = Greeting1<'world'>;
type HelloEveryOne = Greeting1<'Everyone'>;

type EmailLocaleIDs1 = "welcome_email" | "email_heading";
type FooterLocaleIDs1 = "footer_title" | "footer_sendoff";

type AllLocaleIDs12 = `${EmailLocaleIDs1} ${FooterLocaleIDs1}`

type Lang1 = "en" | "ja" | "pt";

type LocaleMessageIDs12 = `${Lang1} ${AllLocaleIDs12}`