(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"./docs/30-HOOKS.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var r=n("../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),s=(n("../../node_modules/react/index.js"),n("../../node_modules/@mdx-js/react/dist/esm.js")),a=n("./src/utils/Parameters.tsx"),o={},i="wrapper";function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)(i,Object.assign({},o,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"hooks"},"Hooks"),Object(s.b)("p",null,"Hooks are the easiest way to work with JasonAPI. They provide a means for initiating\nrequests created by ",Object(s.b)("inlineCode",{parentName:"p"},"jasonApiRequest()")," and retriving the response."),Object(s.b)("h2",{id:"userequest"},"useRequest()"),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"useRequest()")," is the primary hook for working with ",Object(s.b)("inlineCode",{parentName:"p"},"jasonApiRequest()"),"-initiated requests.\nIt accepts two parameters: an options object and a dependency array. At the bare minimum,\nyou options object should include the ",Object(s.b)("inlineCode",{parentName:"p"},"action")," property with the action to execute\n(created by ",Object(s.b)("inlineCode",{parentName:"p"},"jasonApiRequest()"),"). The dependency list is an array of variables who, when changed,\nwill cause your request to change. It will return a tuple containing info aboute the request and a\ncallback to initiate the request."),Object(s.b)("h3",{id:"example"},"Example"),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"const SimpleComponent: React.FunctionComponent = () => {\n    const [explodeSunRequest, makeExplodeSunRequest] = useRequest(\n        // explodeSun() is an action created by `jasonApiRequest()` and defined elsewhere.\n        { action: explodeSun() } \n    );\n\n    return (\n        <div>\n            {\n                explodeSunRequest.status === 'success' && \n                    <pre>{JSON.stringify(explodeSunRequest.response)}</pre>\n            }\n\n            <button onClick={makeExplodeSunRequest}>Explode the Sun!</button>\n        </div>\n    );\n};\n")),Object(s.b)("h3",{id:"parameters"},"Parameters"),Object(s.b)(a.a,{parameters:[{name:"requestOptions",required:!0,description:"An object containing all the options for your request. Described below."},{name:"false",required:!0,description:"An array of all values from the Component scope that are used as part of the request."}],mdxType:"Parameters"}),Object(s.b)("h3",{id:"requestoptions-shape"},"requestOptions Shape"),Object(s.b)(a.a,{parameters:[{name:"action",required:!0,description:"The `jasonApiRequest()` action to execute."},{name:"cacheScheme",required:!1,description:"How requests should be cached.",default:"cacheFirst"},{name:"expandResourceObjects",required:!1,description:"\n                By default, response data will only include the `type` and `id` of the\n                resource object. This helps in optimization. If you would like to include\n                the full response, set this to `true`.\n            ",default:"false"},{name:"onError",required:!1,description:""},{name:"onSuccess",required:!1,description:""}],mdxType:"Parameters"}),Object(s.b)("h3",{id:"response"},"Response"),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"useRequest")," will return a tuple (a two-item array) containing (1) an object with info about the request\nand (2) a function to initiate the request. The request info object has the following properties."),Object(s.b)(a.a,{parameters:[{name:"status",description:"Either 'idle', 'loading', 'success', or 'error'."},{name:"error",description:"The error response body. Only present if `status` is 'error'."},{name:"response",description:"The successful response body. Only present if `status` is 'success'."}],mdxType:"Parameters"}),Object(s.b)("h2",{id:"useautorequest"},"useAutoRequest()"),Object(s.b)("p",null,"This is similar to ",Object(s.b)("inlineCode",{parentName:"p"},"useRequest()"),", but handles triggering the request automatically. This is useful,\nfor example, for auto-triggering a request on component mount. The request can also be re-triggered\nwhen a dependency changes. "),Object(s.b)("h3",{id:"example-1"},"Example"),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"interface ArticlesListProps {\n    page: number;\n}\n\nconst ArticlesList: React.FunctionComponent<ArticlesListProps> = ({ page }) => {\n    const [fetchArticlesRequest, refetchArticles] = useRequest(\n        // fetchArticles() is an action created by `jasonApiRequest()` and defined elsewhere.\n        { action: fetchArticles() } \n    );\n\n    return (\n        <div>\n            {fetchArticlesRequest.status === 'success' && {\n                fetchArticles.response.data.map(\n                    article => <Article id={article.id} />\n                )\n            }}\n\n            <button onClick={refetchArticles}>Refetch Articles</button>\n        </div>\n    );\n};\n")),Object(s.b)("h2",{id:"useitem"},"useItem()"),Object(s.b)("p",null,"Pull a single JSON API resource object out of the Redux store."),Object(s.b)("h3",{id:"example-2"},"Example"),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"interface PersonResource extends ResourceObject {\n    type: 'people';\n    attributes: {\n        firstName: string;\n        lastName: string;\n    };\n}\n\ninterface AuthorProps {\n    id: string;\n}\n\nconst Author: React.SFC<AuthorProps> = ({ id }) => {\n    const author = useItem<PersonResource>('people', id);\n\n    if (!author) {\n        return null;\n    }\n\n    return (\n        <div>\n            {author.attributes.firstName} {author.attributes.lastName}\n        </Root>\n    );\n};\n")),Object(s.b)("h2",{id:"usecollection"},"useCollection()"),Object(s.b)("p",null,"Pull a collection of Resource Objects out of the Redux store."),Object(s.b)("h3",{id:"parameters-1"},"Parameters"),Object(s.b)(a.a,{parameters:[{name:"resourceType",required:!0,description:"The type of resource object. Comes for the `type` property from the API response."},{name:"resourceIds",required:!1,description:"An array of resource ID's to grab. Will grab all Resource Objects of the given type if ommitted."},{name:"expandResourceObjects",required:!1,description:"Should the full data for the resource objects be returned? If `false`, only Resource Identifiers will be returned."}],mdxType:"Parameters"}),Object(s.b)("h3",{id:"example-3"},"Example"),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"interface ArticlesResource extends ResourceObject {\n    type: 'articles';\n    attributes: {\n        title: string;\n        content: string;\n    };\n}\n\nconst Articles: React.SFC<AuthorProps> = () => {\n    const allArticles = useCollection<ArticlesResource>('articles');\n\n    return (\n        <div>\n            {articles.map(\n                article => <Article id={article.id} />\n            )}\n        </div>\n    );\n};\n")))}c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"docs/30-HOOKS.mdx"}}),c.isMDXComponent=!0},"./src/utils/Parameters.tsx":function(e,t,n){"use strict";var r=n("../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),s=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),a=n("../../node_modules/react/index.js"),o=n.n(a);function i(){var e=Object(r.a)(["\n    td {\n        padding: 1em;\n    }\n\n    thead {\n        font-weight: bold;\n\n        td {\n            background-color: #808080;\n            color: #fff;\n        }\n    }\n\n    tbody {\n        td {\n            background-color: #f7f7f7;\n        }\n\n        tr:nth-child(even) td {\n            background-color: #f0f0f0;\n        }\n    }\n"]);return i=function(){return e},e}var c=function(e){var t=e.parameters,n=t.some((function(e){return void 0!==e.default})),r=t.some((function(e){return void 0!==e.required}));return o.a.createElement(u,null,o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("td",null,"Name"),o.a.createElement("td",null,"Description"),r&&o.a.createElement("td",null,"Required"),n&&o.a.createElement("td",null,"Default"))),o.a.createElement("tbody",null,t.map((function(e){return o.a.createElement("tr",null,o.a.createElement("td",null,e.name),o.a.createElement("td",null,e.description),r&&o.a.createElement("td",null,e.required?"Yes":"No"),n&&o.a.createElement("td",null,e.default))}))))};t.a=c,c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Parameters",filename:"src/utils/Parameters.tsx"}});var u=s.d.table(i())}}]);
//# sourceMappingURL=docs-30-hooks.2b51c10d5e55a5d2bebc.js.map