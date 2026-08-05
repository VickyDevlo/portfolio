import { useEffect } from "react";

const SITE_NAME = "Pranav.dev";

export const usePageTitle = (title) => {
  useEffect(() => {
    document.title = title
      ? `${title} | ${SITE_NAME}`
      : `${SITE_NAME} | React & SAP UI5 Developer`;
  }, [title]);
};