import { useState } from "react";
import "./style.scss";

export default function LanguageSelector() {
  const [language, setLanguage] = useState("pt/BR");

  const toggle = () =>
    setLanguage((currentLanguage) =>
      currentLanguage === "pt/BR" ? "en/US" : "pt/BR",
    );

  console.log("macaco");

  return (
    <button
      className="flex-center language-selector px-1 py-1 mt-3 mr-3"
      onClick={toggle}
    >
      {language.toUpperCase()}
    </button>
  );
}
