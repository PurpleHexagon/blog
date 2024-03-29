import React from 'react'
import { render } from 'react-dom'
import Highlight, { defaultProps } from 'prism-react-renderer'
// import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import Prism from 'prism-react-renderer/prism';
import theme from "prism-react-renderer/themes/palenight";
import PrismJs from "prismjs"
import { useEffect } from "react"

PrismJs.languages.ruby = {
    'comment': /#[^\r\n]*(\r?\n|$)/g,
    'string': /("|')(\\?.)*?\1/g,
    'regex': {
        pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/g,
        lookbehind: true
    },
    'keyword': /\b(alias|and|BEGIN|begin|break|case|class|def|define_method|defined|do|each|else|elsif|END|end|ensure|false|for|if|in|module|new|next|nil|not|or|raise|redo|rescue|retry|return|self|super|then|throw|true|undef|unless|until|when|while|yield)\b/g,
    'builtin': /\b(Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Stat|File|Fixnum|Fload|Hash|Integer|IO|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|String|Struct|TMS|Symbol|ThreadGroup|Thread|Time|TrueClass)\b/,
    'boolean': /\b(true|false)\b/g,
    'number': /\b-?(0x)?\d*\.?\d+\b/g,
    'operator': /[-+]{1,2}|!|=?&lt;|=?&gt;|={1,2}|(&amp;){1,2}|\|?\||\?|\*|\//g,
    'inst-var': /[@&]\b[a-zA-Z_][a-zA-Z_0-9]*[?!]?\b/g,
    'namespace': /::\b[a-zA-Z_][a-zA-Z_0-9]*[?!]?\b/g,
    'symbol': /:\b[a-zA-Z_][a-zA-Z_0-9]*[?!]?\b/g,
    'const': /\b[A-Z][a-zA-Z_0-9]*[?!]?\b/g,
    'ignore': /&(lt|gt|amp);/gi,
    'punctuation': /[{}[\];(),.:]/g
};

export const Code = ({ codeString, language, ...props }) => {
    useEffect(() => {
        // call the highlightAll() function to style our code blocks
        // PrismJs.highlightAll()
    })

    if (props['react-live']) {
        // return (
        //     <LiveProvider code={codeString} noInline={true}>
        //         <LiveEditor />
        //         <LiveError />
        //         <LivePreview />
        //     </LiveProvider>
        // )
    } else {

        return (
            <Highlight {...defaultProps} Prism={PrismJs} code={codeString} language={language} theme={undefined}>
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <pre className={className} style={style}>
            {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                        <span {...getTokenProps({ token, key })} />
                    ))}
                </div>
            ))}
          </pre>
                )}
            </Highlight>
        )
    }
}