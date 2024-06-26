/**
 * @prettier
 */
import React from "react"
import PropTypes from "prop-types"
import get from "lodash/get"

const SyntaxHighlighterWrapper = (Original, system) => {
  const SyntaxHighlighter = ({ renderPlainText, children, ...rest }) => {
    const configs = system.getConfigs()
    const canSyntaxHighlight = !!get(configs, "syntaxHighlight.activated")
    const PlainTextViewer = system.getComponent("PlainTextViewer")

    if (!canSyntaxHighlight && typeof renderPlainText === "function") {
      return renderPlainText({ children, PlainTextViewer })
    }
    if (!canSyntaxHighlight) {
      return <PlainTextViewer>{children}</PlainTextViewer>
    }

    return <Original {...rest}>{children}</Original>
  }

  SyntaxHighlighter.propTypes = {
    ...Original.propTypes,
    renderPlainText: PropTypes.func,
    children: PropTypes.string.isRequired,
  }

  return SyntaxHighlighter
}

export default SyntaxHighlighterWrapper
