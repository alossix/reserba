import { theme } from "@/styles/theme";
import { InterfaceLanguages } from "@/types/general";
import styled from "@emotion/styled";
import useTranslation from "next-translate/useTranslation";
import React from "react";

type LanguageSelectorProps = {
  handleSelectLanguage: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  id: string;
  languageSet: "interface" | "learning";
  selectedLanguage: InterfaceLanguages;
  showIcon?: boolean;
};

const languageLabelsInterface: Record<InterfaceLanguages, string> = {
  ca: "Català",
  de: "Deutsch",
  en: "English",
  es: "Español",
  fr: "Français",
  it: "Italiano",
};

export const LanguageSelector = React.forwardRef<
  HTMLDivElement,
  LanguageSelectorProps
>(
  (
    {
      handleSelectLanguage,
      id,
      languageSet,
      selectedLanguage,
      showIcon = true,
    },
    ref
  ) => {
    const { t } = useTranslation();

    const createLanguageOptions = () => {
      return (
        Object.keys(languageLabelsInterface) as Array<
          keyof typeof languageLabelsInterface
        >
      ).map((key) => ({
        value: key,
        label: languageLabelsInterface[key],
      }));
    };

    const languageOptions = createLanguageOptions();

    return (
      <LanguageSelectorContainer ref={ref}>
        <label
          htmlFor={id}
          style={{
            paddingTop: 2,
          }}
        >
          {showIcon && (
            <div style={{ opacity: 0.5, filter: "saturate(0)" }}>🌐</div>
          )}
        </label>
        <StyledSelectMenu
          aria-label="language-select-menu"
          id={id}
          onChange={handleSelectLanguage}
          tabIndex={0}
          value={selectedLanguage}
        >
          <option value="" disabled aria-disabled>
            {t("common:header_language")}
          </option>
          {languageOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </StyledSelectMenu>
      </LanguageSelectorContainer>
    );
  }
);

LanguageSelector.displayName = "LanguageSelector";

const LanguageSelectorContainer = styled.div({
  display: "flex",
  alignItems: "center",
  gap: 8,
});

const StyledSelectMenu = styled.select({
  padding: "2px 4px",
  borderRadius: 4,
  border: `1px solid ${theme.colors.mediumGrey}`,
  color: theme.colors.lightBlack,
  backgroundColor: theme.colors.white,
});
