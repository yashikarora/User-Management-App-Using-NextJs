(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[460],{3255:(e,a,t)=>{Promise.resolve().then(t.bind(t,1565))},1565:(e,a,t)=>{"use strict";t.d(a,{default:()=>D});var s=t(5155),r=t(2115),n=t(2317),o=t(1027),l=t(3463),d=t(9795);function i(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];return(0,d.QP)((0,l.$)(a))}let c=(0,o.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),m=r.forwardRef((e,a)=>{let{className:t,variant:r,size:o,asChild:l=!1,...d}=e,m=l?n.DX:"button";return(0,s.jsx)(m,{className:i(c({variant:r,size:o,className:t})),ref:a,...d})});m.displayName="Button";var u=t(9310),f=t(3753);let g=u.bL;u.l9;let p=u.ZL;u.bm;let b=r.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)(u.hJ,{ref:a,className:i("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",t),...r})});b.displayName=u.hJ.displayName;let x=r.forwardRef((e,a)=>{let{className:t,children:r,...n}=e;return(0,s.jsxs)(p,{children:[(0,s.jsx)(b,{}),(0,s.jsxs)(u.UC,{ref:a,className:i("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",t),...n,children:[r,(0,s.jsxs)(u.bm,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,s.jsx)(f.A,{className:"h-4 w-4"}),(0,s.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});x.displayName=u.UC.displayName;let h=e=>{let{className:a,...t}=e;return(0,s.jsx)("div",{className:i("flex flex-col space-y-1.5 text-center sm:text-left",a),...t})};h.displayName="DialogHeader";let y=e=>{let{className:a,...t}=e;return(0,s.jsx)("div",{className:i("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",a),...t})};y.displayName="DialogFooter";let N=r.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)(u.hE,{ref:a,className:i("text-lg font-semibold leading-none tracking-tight",t),...r})});N.displayName=u.hE.displayName,r.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)(u.VY,{ref:a,className:i("text-sm text-muted-foreground",t),...r})}).displayName=u.VY.displayName;var v=t(6195);let w=(0,o.F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),j=r.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)(v.b,{ref:a,className:i(w(),t),...r})});j.displayName=v.b.displayName;let k=r.forwardRef((e,a)=>{let{className:t,type:r,...n}=e;return(0,s.jsx)("input",{type:r,className:i("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",t),ref:a,...n})});k.displayName="Input";let E=[{name:"firstName",label:"FirstName",placeholder:"Enter your FirstName",type:"input"},{name:"lastName",label:"LastName",placeholder:"Enter your LastName",type:"input"},{name:"email",label:"Email",placeholder:"Enter your Email",type:"email"},{name:"address",label:"Address",placeholder:"Enter your Address",type:"input"}],S={firstName:"",lastName:"",email:"",address:""};var C=t(3807),_=t.n(C);let R=async()=>{let e="mongodb+srv://".concat("your-mongodb-username",":").concat("your-mongodb-password","@usermanagementapp.l1x2t.mongodb.net/");_().connect(e).then(()=>console.log("DataBase Connected Sucessfully")).catch(e=>{console.log(e)})},z=new(_()).Schema({firstName:String,lastName:String,email:String,address:String}),U=_().model("User",z)||_().models.User;var A=t(1615);let F=async e=>{try{if(await R(),await U.create(e))return{success:!0,message:"User created successfully"};return{success:!1,message:"Something went wrong! Try again later"}}catch(e){return console.log(e),A.NextResponse.json({success:!1,message:"Something went wrong! Try again later"})}},D=()=>{let[e,a]=(0,r.useState)(!1),[t,n]=(0,r.useState)(S),o=async()=>{console.log(await F(t))};return(0,s.jsxs)("div",{children:[(0,s.jsx)(m,{onClick:()=>a(!0),className:"bg-red-300 text-white",children:"Add New User"}),(0,s.jsx)(g,{open:e,onOpenChange:()=>{a(!1),n(S)},children:(0,s.jsxs)(x,{className:"sm:max-w-[425px]",children:[(0,s.jsx)(h,{children:(0,s.jsx)(N,{children:"Add New User"})}),(0,s.jsxs)("form",{action:o,className:"grid gap-4 py-4",children:[E.map(e=>(0,s.jsxs)("div",{className:"grid grid-cols-4 items-center gap-4 mb-4",children:[(0,s.jsx)(j,{htmlFor:"name",className:"text-left",children:e.label}),(0,s.jsx)(k,{id:e.name,name:e.name,placeholder:e.placeholder,type:e.type,value:t[e.name],onChange:a=>{n({...t,[e.name]:a.target.value})},className:"col-span-3 text-red-500"})]},e.name)),(0,s.jsx)(y,{children:(0,s.jsx)(m,{className:"bg-yellow-500 disabled:opacity-55",disabled:!Object.keys(t).every(e=>""!==t[e].trim()),type:"submit",children:"Save changes"})})]})]})})]})}}},e=>{var a=a=>e(e.s=a);e.O(0,[176,410,441,517,358],()=>a(3255)),_N_E=e.O()}]);