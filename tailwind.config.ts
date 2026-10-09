import type{Config}from"tailwindcss";import plugin from"tailwindcss/plugin";
export default{
content:["./src/**/*.{ts,tsx}"],
theme:{
colors:{transparent:"transparent",current:"currentColor",white:"var(--rm-white)",black:"var(--rm-black)",ink:{"900":"var(--rm-ink-900)"},slate:{"800":"var(--rm-slate-800)","700":"var(--rm-slate-700)","600":"var(--rm-slate-600)","500":"var(--rm-slate-500)","400":"var(--rm-slate-400)"},steel:{"300":"var(--rm-steel-300)"},mist:{"200":"var(--rm-mist-200)","100":"var(--rm-mist-100)"},ice:{"50":"var(--rm-ice-50)"},pearl:"var(--rm-pearl)",teal:{"700":"var(--rm-teal-700)","500":"var(--rm-teal-500)","300":"var(--rm-teal-300)"}},
fontFamily:{display:["var(--font-newsreader)","Georgia","serif"],body:["var(--font-outfit)","sans-serif"]},
fontSize:{xs:["0.875rem",{lineHeight:"1.35"}],sm:["1rem",{lineHeight:"1.45"}],base:["1.125rem",{lineHeight:"1.65"}],lg:["1.25rem",{lineHeight:"1.55"}],xl:["1.5rem",{lineHeight:"1.3"}],"2xl":["1.875rem",{lineHeight:"1.2"}],"3xl":["2.25rem",{lineHeight:"1.15"}],"4xl":["3rem",{lineHeight:"1.05"}],"5xl":["clamp(2.5rem, calc(1rem + 6vw), 6.5rem)",{lineHeight:"0.95"}]},
borderRadius:{sm:"var(--radius-sm)",md:"var(--radius-md)",lg:"var(--radius-lg)",arch:"var(--radius-arch)",pill:"var(--radius-pill)"},
boxShadow:{soft:"var(--shadow-soft)",lift:"var(--shadow-lift)"},
transitionTimingFunction:{"rm-out":"var(--ease-out)","rm-in-out":"var(--ease-in-out)"},
transitionDuration:{"micro":"var(--duration-micro)","ui":"var(--duration-ui)","scene":"var(--duration-scene)"},
extend:{}
},
plugins:[plugin(({addUtilities})=>addUtilities({".text-label":{fontSize:"var(--text-label)",lineHeight:"1.4"},".text-body":{fontSize:"var(--text-body)",lineHeight:"1.65"},".text-lead":{fontSize:"var(--text-lead)",lineHeight:"1.55"},".text-nav":{fontSize:"var(--text-nav)",lineHeight:"1.4"},".text-h1":{fontSize:"var(--text-h1)",lineHeight:".95"},".text-h2":{fontSize:"var(--text-h2)",lineHeight:"1"},".text-h3":{fontSize:"var(--text-h3)",lineHeight:"1.15"}}))]
} satisfies Config;