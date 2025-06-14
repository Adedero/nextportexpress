import{ag as n,aD as e,c as t,o,k as l,U as s}from"./Cup_hyTX.js";var d=({dt:i})=>`
.p-iconfield {
    position: relative;
}

.p-inputicon {
    position: absolute;
    top: 50%;
    margin-top: calc(-1 * (${i("icon.size")} / 2));
    color: ${i("iconfield.icon.color")};
    line-height: 1;
    z-index: 1;
}

.p-iconfield .p-inputicon:first-child {
    inset-inline-start: ${i("form.field.padding.x")};
}

.p-iconfield .p-inputicon:last-child {
    inset-inline-end: ${i("form.field.padding.x")};
}

.p-iconfield .p-inputtext:not(:first-child),
.p-iconfield .p-inputwrapper:not(:first-child) .p-inputtext {
    padding-inline-start: calc((${i("form.field.padding.x")} * 2) + ${i("icon.size")});
}

.p-iconfield .p-inputtext:not(:last-child) {
    padding-inline-end: calc((${i("form.field.padding.x")} * 2) + ${i("icon.size")});
}

.p-iconfield:has(.p-inputfield-sm) .p-inputicon {
    font-size: ${i("form.field.sm.font.size")};
    width: ${i("form.field.sm.font.size")};
    height: ${i("form.field.sm.font.size")};
    margin-top: calc(-1 * (${i("form.field.sm.font.size")} / 2));
}

.p-iconfield:has(.p-inputfield-lg) .p-inputicon {
    font-size: ${i("form.field.lg.font.size")};
    width: ${i("form.field.lg.font.size")};
    height: ${i("form.field.lg.font.size")};
    margin-top: calc(-1 * (${i("form.field.lg.font.size")} / 2));
}
`,p={root:"p-iconfield"},r=n.extend({name:"iconfield",style:d,classes:p}),c={name:"BaseIconField",extends:e,style:r,provide:function(){return{$pcIconField:this,$parentInstance:this}}},f={name:"IconField",extends:c,inheritAttrs:!1};function a(i,m,$,g,h,u){return o(),t("div",s({class:i.cx("root")},i.ptmi("root")),[l(i.$slots,"default")],16)}f.render=a;export{f as default};
