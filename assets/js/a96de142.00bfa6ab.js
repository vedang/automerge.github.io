"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5725],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>p});var r=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=r.createContext({}),h=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=h(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=h(o),m=a,p=d["".concat(l,".").concat(m)]||d[m]||c[m]||n;return o?r.createElement(p,i(i({ref:t},u),{},{components:o})):r.createElement(p,i({ref:t},u))}));function p(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var h=2;h<n;h++)i[h]=o[h];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},3913:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>h});var r=o(7462),a=(o(7294),o(3905));const n={},i="Merry Commitmas - a year-end recap of what's new in Automerge",s={permalink:"/blog/2023/12/21/merry-commitmas",editUrl:"https://github.com/automerge/automerge.github.io/edit/main/blog/2023-12-21-merry-commitmas.md",source:"@site/blog/2023-12-21-merry-commitmas.md",title:"Merry Commitmas - a year-end recap of what's new in Automerge",description:"Since releasing automerge-repo last month, we've been working closely with our users to improve the library based on real-world usage. One in-house project, the Tiny Essay Editor, is a Markdown editor with comment support which was used to write the latest Ink & Switch essay, Embark.",date:"2023-12-21T00:00:00.000Z",formattedDate:"December 21, 2023",tags:[],readingTime:6.365,hasTruncateMarker:!1,authors:[],frontMatter:{},nextItem:{title:'Automerge-Repo: A "batteries-included" toolkit for building local-first applications',permalink:"/blog/2023/11/06/automerge-repo"}},l={authorsImageUrls:[]},h=[{value:"CodeMirror Integration",id:"codemirror-integration",level:2},{value:"updateText for easy integration",id:"updatetext-for-easy-integration",level:2},{value:"Surfacing Sync State",id:"surfacing-sync-state",level:2},{value:"Loading faster",id:"loading-faster",level:2}],u={toc:h},d="wrapper";function c(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Since ",(0,a.kt)("a",{parentName:"p",href:"/blog/2023/11/06/automerge-repo"},"releasing")," automerge-repo last month, we've been working closely with our users to improve the library based on real-world usage. One in-house project, the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/inkandswitch/tiny-essay-editor"},"Tiny Essay Editor"),", is a Markdown editor with comment support which was used to write the ",(0,a.kt)("a",{parentName:"p",href:"https://www.inkandswitch.com/embark/"},"latest Ink & Switch essay, Embark"),"."),(0,a.kt)("p",null,"Like many Ink & Switch essays, Embark is a large piece: the final version is over 11,000 words and 60,000 characters.  The full edit history is just shy of 200,000 edits. That means the team produced roughly 3x as much text as made it into the final version. The final version of the document with the full history and all the comments included is only 376kb and takes a little under 4s to load from disk, but from then on edits are reasonably snappy: most edits take 25ms (equivalent to 30fps) from keypress to paint on my desktop."),(0,a.kt)("p",null,"There's still plenty of room to improve here. Ultimately our goal is to reliably achieve single-frame updates even on very large documents and we still have a long way to go on memory usage. Still, we thought folks might enjoy hearing a little behind-the-scenes description of what we've been up to. "),(0,a.kt)("p",null,"But first, a few feature updates:"),(0,a.kt)("h2",{id:"codemirror-integration"},"CodeMirror Integration"),(0,a.kt)("p",null,"Tiny Essay Editor is built around the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/automerge/automerge-codemirror"},"automerge-codemirror")," integration and uses incremental updates to make sure it stays fast even on extremely large documents. We've managed to maintain next-frame performance for most edits and document sizes, but on very large documents we still have a few stalls caused by calculating  network synchronization messages to work through."),(0,a.kt)("p",null,"That said, the CodeMirror integration is stable, efficient, and works well with both the marks and cursors APIs. If you need a well-supported plaintext editor (or want a reference to write your own integration for your favorite editor) start here. ProseMirror integration is coming too, more about that after christmas."),(0,a.kt)("h2",{id:"updatetext-for-easy-integration"},"updateText for easy integration"),(0,a.kt)("p",null,"By default, Automerge's text fields update by replacement, much like they would with any web form. If your application submits the full value for a field, Automerge will replace the whole value. Under the hood, Automerge's strings default to being editable, but integrating a full text editor component in your application is a lot of complication for making a simple text field editable."),(0,a.kt)("p",null,"The reason is that the interface Automerge exposes for modifying text is ",(0,a.kt)("inlineCode",{parentName:"p"},"Automerge.splice"),", which lets you insert or delete characters at a particular index in the string. Unfortunately, browsers (and most other platforms) don't give you this information very easily; instead they just give you the whole content of the text field and you have to figure out yourself what changed."),(0,a.kt)("p",null,"Figuring out what changed between two strings is actually quite fiddly. There are algorithms you can study, such as the ",(0,a.kt)("a",{parentName:"p",href:"https://www.nathaniel.ai/myers-diff/"},"Myers diff"),", and libraries ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/myers-diff"},"that implement them"),"... but we decided that it would be worthwhile to just build one into Automerge and spare you the hassle. We've therefore introduced a function ",(0,a.kt)("inlineCode",{parentName:"p"},"Automerge.updateText"),", which looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'let doc1 = Automerge.from({ text: "Hello world!" })\n\nlet doc2 = Automerge.clone(doc1)\ndoc2 = Automerge.change(doc2, d => {\n    /// Note we just pass the new value we want the whole field to have\n    Automerge.updateText(d, ["text"], "Goodbye world!")\n})\n\ndoc1 = Automerge.change(doc1, d => {\n    Automerge.updateText(d, ["text"], "Hello friends!")\n})\n\n/// text is now "Goodbye friends!"\nconst merged = Automerge.merge(doc1, doc2)\n')),(0,a.kt)("p",null,"This approach is really handy for places like form fields where a full rich-text editor would be overkill, but isn't as efficient at capturing inputs, particularly for larger documents. Let us know how it works for you!"),(0,a.kt)("h2",{id:"surfacing-sync-state"},"Surfacing Sync State"),(0,a.kt)("p",null,"As the Embark essay grew ever-larger, the team began to wonder whether they were up-to-date with each other, our storage server, and so on. We worked with them (thanks to Paul Sonnentag) to allow sync state to be forwarded among peers so that you could subscribe to the sync state of other systems. Right now TEE is just using this to confirm when changes are sent to (or received from) our storage server, particularly after editing offline, but the same infrastructure could be used to keep track of which of your devices were up-to-date, whether a collaborator had received your changes, or even to annotate a chat history. We're eager to see how you might use this. (And don't forget you can always send arbitrary messages to other peers with the ephemeral messaging API!)"),(0,a.kt)("h2",{id:"loading-faster"},"Loading faster"),(0,a.kt)("p",null,"Finally, let's wrap up with some performance work. As we described above, the Embark essay's Automerge document history got pretty large \u2013 roughly 200,000 operations, with around 1000 edit sessions (one per editor tab). This uncovered some performance problems in Automerge: when we started, loading the editor took around 40 seconds!"),(0,a.kt)("p",null,"If you've ever encountered the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/automerge/automerge-perf"},'"edit trace" benchmark'),", which is widely used to benchmark CRDT performance, this might be confusing. That benchmark is even larger. It contains around 270,000 operations and Automerge can load it in ~200ms. Why were we taking two orders of magnitude longer to load a similar-sized document?"),(0,a.kt)("p",null,"Well, notice that I said loading the ",(0,a.kt)("em",{parentName:"p"},"editor")," took 40s. In profiling this problem, we saw that the Tiny Essay Editor (TEE) created an empty Automerge document, and ran the sync protocol with our sync server to fetch the document. The sync protocol didn't send the whole document down the wire in one go \u2013 instead it would send the list of changes that the client doesn't have. In the case of the initial load, the client doesn't have ",(0,a.kt)("em",{parentName:"p"},"any")," of the changes, and so each change was sent down the wire individually. TEE would then apply each change one after another. Applying invididual changes in this way is much slower than loading the compressed document format (which is produced by ",(0,a.kt)("inlineCode",{parentName:"p"},"Automerge.save"),")."),(0,a.kt)("p",null,"We solved this in a straightforward way: when a peer requests a document it doesn't have at all, we skip the elaborate sync protocol and simply send the whole compressed document. Future synchronizations are very fast: the peers remember their last sync state and can quickly calculate the comparison"),(0,a.kt)("p",null,"Unfortunately, even loading the compressed version of this document was much slower than we expected: it was taking somewhere around 5s. That's about 5s too long. "),(0,a.kt)("p",null,"Investigating where the time was being spent we spotted a few performance problems, including:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Automerge stores operations internally in a B-tree, which has a vector of operations on each node. We were losing some time allocating these little vectors every time we received a new change."),(0,a.kt)("li",{parentName:"ul"},"Each node in the B-tree has an index on it, where we store things like the number of ops and the number of characters in its subtree. When loading a document we were updating these indexes for every edit in the document's history.")),(0,a.kt)("p",null,"We solved these problems by making several changes:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Rather than storing the operations directly in the B-tree, we now store them in a separate table and just store indexes into this table in the B-tree. This consolidates allocations so we don't spend so much time making tiny allocations."),(0,a.kt)("li",{parentName:"ol"},"When loading a document, we wait until we've inserted every op into the B-tree before generating indexes.")),(0,a.kt)("p",null,"Putting this all together, the load time for the Embark essay is reduced to around ~4 seconds on my machine. This is still about 4s too slow but we've managed to shave the first 90% off of the loading time in this application."),(0,a.kt)("h1",{id:"thats-it"},"That's it!"),(0,a.kt)("p",null,"You can get all this good stuff by updating to Automerge 2.1.10 or later, as well as plenty of smaller improvements (like import/export) and bug fixes (like getting rid of a React hook race condition)."))}c.isMDXComponent=!0}}]);