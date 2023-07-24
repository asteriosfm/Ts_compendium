type World = "world";

type Greeting = `hello ${World}`;

type EmailLocaleIDs = "welcome_email" | "email_heading";
type FooterLocaleIDs = "footer_title" | "footer_sendoff";

type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;

// type AllLocaleIDs = "welcome_email_id" | "email_heading_id"

type AllLocaleIDs1 = `${EmailLocaleIDs | FooterLocaleIDs}_id`;
type Lang = "en" | "ja" | "pt";

type LocaleMessageIDs1 = `${Lang}_${AllLocaleIDs1}`;