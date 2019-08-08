(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports={cardImg:"PostList_cardImg__3GWq0",clickable:"PostList_clickable__DH-vB",githubLink:"PostList_githubLink__3b1jw",blockButton:"PostList_blockButton__3vsKl"}},18:function(e,t,a){e.exports={header:"Navbar_header__kP8TZ",brand:"Navbar_brand__1TrHH",navButton:"Navbar_navButton__3hzEf",activeNavButton:"Navbar_activeNavButton__3BSn3"}},22:function(e,t,a){e.exports={slide:"Carousel_slide__2ZZby",mobileSlide:"Carousel_mobileSlide__2skeS",full:"Carousel_full__3SxM9"}},32:function(e,t,a){e.exports={cardImg:"CardImageModal_cardImg__lT1bY"}},33:function(e){e.exports={"Major-projects":[{name:"Infection Control iOS",desc:"Originally an idea of my father's, I began this app in Android to help solve an issue of data collection and data visualization for his department, Infection & Control, at work. However, as I worked out the details with him, it became more apparent how helpful this app could be for not only his own hospital but for hospitals and clinics in general. In his experience, hospitals often lag behind in terms of technology, despite the huge benefit data collection often brings.",images:[{src:"https://imgur.com/vEULS92.png",alt:"Home screen with 6 buttons to begin creating new IC Reports"},{src:"https://imgur.com/mU3gquc.png",alt:"List of Employees"},{src:"https://imgur.com/bwoYyGA.png",alt:"Screen to create a new report (initially a Contact Report)"},{src:"https://imgur.com/1cq8bgu.png",alt:"Empty Settings Screen"}],github:"https://github.com/NLCaceres/iOS-Records"},{name:"Work-it iOS",desc:"One of my first major iOS projects. The idea came from conversations with my best friend about an all encompassing fitness and health app. There are plenty of apps that cover nutrition, and plenty that cover exercise, but we wanted an app that would fit it all in one clean space. Using this project for my second iOS class, the undertaking was far too much to manage in a month, but I found this realization helped me for future projects by teaching me better project management and setting realistic goals. Between the number of screens, the number of 3rd party APIs, and novel features that I had hoped to implement, it was a major challenge, even now that remains unfinished. One day I hope to be able to overcome those technical issues and see this app fully fledged and combined with my app Recipes Galore to fully encompass a true health app.",images:[{src:"https://imgur.com/i0cLTiz.png",alt:"A map full of options for gyms and recreation nearby"},{src:"https://imgur.com/IL267XG.png",alt:"Log-in screen"},{src:"https://imgur.com/VdrqjHC.png",alt:"A list full of options for gyms and recreation nearby"},{src:"https://imgur.com/nW1pSBT.png",alt:"User Profile Screen with basic stats"},{src:"https://imgur.com/pAzDwzH.png",alt:"User Edit Profile Settings"},{src:"https://imgur.com/lHLSXil.png",alt:"User Calorie Count and placeholder for food intake breakdown graphs"},{src:"https://imgur.com/jKw77w8.png",alt:"User Achievements screen without icons"},{src:"https://imgur.com/RLEg9eC.png",alt:"User's Workout Log"},{src:"https://imgur.com/SCzW65N.png",alt:"User adding new workout to his log"}],github:"https://github.com/NLCaceres/WorkIt-iOS"},{name:"Recipes Galore iOS",desc:"This was very first major project in a class. Though I had taken two classes in C++ up to this point, by comparison, this project felt incredibly fleshed out. A simple app with huge endeavours, I had hoped to create an app that would deliver solid recipe recommendations for every ingredient you may have had in your fridge. Though I could never figure out barcode scanning (as an easier way to insert ingredients in your virtual fridge), I'm glad I managed to implement a majority of the app despite rookie mistakes such as multiple segues to the same view controller. This project would continue to influence me in the direction I wanted to take my apps, hoping to improve the lives of the users and their health (like Work it and currently Infection Control). Though, in retrospect, I had made quite a few mistakes in my early Software Development career, I feel I've come a very long way since then. Having recently cleaned up my code and updated some UI for better user experience, I look fondly at my beginnings and excitedly for my future.",images:[{src:"https://imgur.com/K7naT1F.png",alt:"Initial Recipes Galore Home Screen before Logging in"},{src:"https://imgur.com/WMSHKAO.png",alt:"Login Screen"},{src:"https://imgur.com/wvWDDL5.png",alt:"Once logged in, the screen opens user features"},{src:"https://imgur.com/6FVnRl7.png",alt:"Desserts Options"},{src:"https://imgur.com/dKuTM77.png",alt:"User Profile"},{src:"https://imgur.com/VV9KmAV.png",alt:"Add New Recipe from User Profile Screen before image chosen"},{src:"https://imgur.com/u2tRPAb.png",alt:"Add New Recipe from User Profile Screen after image chosen"},{src:"https://imgur.com/T2Numjx.png",alt:"Meat Dishes"},{src:"https://imgur.com/WGLAtWO.png",alt:"Recipe Detail View"},{src:"https://imgur.com/QxAuPyl.png",alt:"Refrigerator list of ingredients"},{src:"https://imgur.com/92TLsI3.png",alt:"Add Ingredient to Refrigerator List"}]}],"Small-projects":[{name:"Keeping data secured ...as long as the bugs don't leak them. iOS",desc:"This was one of my last projects that used Objective-C, and would have been a fun example of keychain, using internal passwords or fingerprints securely. Unfortunately, keychain was horribly bugged at the time and required at least a few workarounds to get it to properly work. After searching tirelessly to find some way to make keychain work as intended and expected based on Apple's documents, I found several suggestions on StackOverflow and various sites online on what to change to enable keychain. Thankfully the workaround I found temporarily fixed keychain for me and finally a user could write notes that were secure from any prying eyes.",images:[{src:"https://imgur.com/lUlihRx.png",alt:"Home screen asking for the user to create a PIN to securely store credit card information"},{src:"https://imgur.com/l09XsUM.png",alt:"Initial Credit card list"},{src:"https://imgur.com/Bfn3UlH.png",alt:"Add new credit card screen"},{src:"https://imgur.com/ONXL5xT.png",alt:"After adding two credit cards to the list"},{src:"https://imgur.com/rEJVNoo.png",alt:"If the user exits the app, this lock screen will appear preventing them from accessing the app secured information"}],github:"github-url"},{name:"Keeping things flowing with background downloading iOS",desc:"This project was built to not only to practice working with REST practices, grabbing images online from various endpoints, but also to see how tableViews could be further customized, loading each object in series. Using Grand Central Dispatch to create queues and handle threads, the project would make GET requests, parse the response, and slide each object as a cell into the table. In addition to sliding in the images, depending on the content of the picture (if Apple's Face recognition API detects faces or not), the app will make adjustments. For those pictures that it detects faces, it'll count them and apply a blur. For those that do not have faces, it'll add hue and exposure, discoloring the image.",images:[{src:"https://imgur.com/IWzBt3R.png",alt:"Home screen displaying"},{src:"https://imgur.com/Yd0EIJM.png",alt:"Main screen displaying no downloaded images"},{src:"https://imgur.com/taotH4F.png",alt:"Home screen displaying images as they download and are modified."}],github:"github-url"},{name:"Remembering my contacts with help from CoreData iOS",desc:"In this app, I took my first steps in learning Swift. Incorporating Apple's CoreData for data persistance, a user could save contacts locally, keeping things simple without a database.",images:[{src:"https://imgur.com/vsa5BLy.png",alt:"Home screen displaying a table view of the contacts contained and saved within the app."},{src:"https://imgur.com/HwsMNs8.png",alt:"Add contact screen"}],github:"github-url"},{name:"Playing with UI-Kit iOS",desc:"The remaining apps showcase my simple attempts in several iOS focused classes to incorporate various libraries from Apple and Facebook. In this particular example, we were instructed to create a small app that would create balls to bounce across the screen, interacting with each other thanks to UI-Kit and the simple physics it provides",images:[{src:"./beach.jpeg",alt:"Home screen with a simple button to make more circles (balls) that will float and bounce around the screen."}],github:"github-url"},{name:"Quotes to Remember Project",desc:"This project encompassed the enirety of a semester when I first learned how to create iOS apps. On and off, the class was instructed to further add features to this app given the new information we had just learned. Beginning with a shared model (singleton pattern) and plists, we created the initial screen displaying quotes in the cloud on tap. Eventually, we added more gesture recognizers to handle swipes and create favorites. Soon the favorites list was added with the help of delegates and data sources, and finally, the add quotes screen was added. It didn't seem like much at first, but by the end of the class, it felt like well-thought out app and a fun one to boot!",images:[{src:"https://imgur.com/ZrNzXdl.png",alt:"Home screen with a quote and the favorited button displaying."},{src:"https://imgur.com/2Qa7jij.png",alt:"Empty Home Screen with initial screen suggesting to the user to tap to begin reading quotes"},{src:"https://imgur.com/45uW0iJ.png",alt:"Home screen with the first quote displayed and no favorited button showing."},{src:"https://imgur.com/V0ZpSh4.png",alt:"Table view list of all the quotes in the app."},{src:"https://imgur.com/xZcSvWF.png",alt:"Add new quote screen"},{src:"https://imgur.com/YyhGU3k.png",alt:"List of quotes with newly added quote from Plato."},{src:"https://imgur.com/aFHt8wx.png",alt:"Table view list of the user's favorite quotes."}],github:"github-url"},{name:"Los Angeles Sightseeing",desc:"This was one of the couple projects that interspersed the quotes project in my first iOS class. Using a collection view to display the images of famous locations in Los Angeles, users could click the collection view cell and get the webpage for these locations, providing the user all the information they could need on it.",images:[{src:"https://imgur.com/HbeKPCt.png",alt:"Collection View of the six famous spots in Los Angeles"},{src:"https://imgur.com/3vuwlET.png",alt:"Loading up the Dodger Stadium Webpage."},{src:"https://imgur.com/JKab77w.png",alt:"Disneyland's homepage."},{src:"https://imgur.com/qDV3YP4.png",alt:"The California Science Center website."}]},{name:"Create your own Story!",desc:"Since iOS is more than just the iPhone after all, my professor ensured that we took the time to play with the iPad Simulator in XCode as well. At the time, constraints were confusing enough for me, so considering the UI as well as making sense of objective C felt tough. Making a fun app in the style of MadLibs, on the other hand, definitely helped to define a concrete goal to work to.",images:[{src:"https://imgur.com/VXJMfjD.png",alt:"Main screen with story but no bonus options"},{src:"https://imgur.com/yNtnoA5.png",alt:"Main screen with no text fields filled in"},{src:"https://imgur.com/hNmmIqs.png",alt:"Main screen with no bonus options"},{src:"https://imgur.com/P71YXhA.png",alt:"Main screen with bonus options"},{src:"https://imgur.com/ahpOJD2.png",alt:"Main screen with bonus options and story open."}]},{name:"Batman vs Superman iOS",desc:"This was the very first iOS project that I ever created. Looking back on at it, it seemed incredibly difficult to make between the constraints, a new language, and actual GUI to interact with. Since then though, I'm proud to see what I learned from this project and what I can do now. Here I'd simply have the background image, a text field for your name, a simple label to dynamically fill, and two buttons for the user to play with. It would take your choice and if you filled in your name, it would insert it into the label with your choice of superhero.",images:[{src:"https://imgur.com/YR66lVj.png",alt:"Main screen with user name and having chosen Batman."},{src:"https://imgur.com/ZQDA9mn.png",alt:"Main screen without the name but having chosen Superman"}]}]}},34:function(e){e.exports={"Major-projects":[{name:"Positive Note Android",desc:"This was the first major app I wrote in Android. In the class that first taught me Android development, we were asked to create an app that would help those in their day-to-day lives whether that was an acessibility issue, a handicap, or simply a health-related concern. Being a Biology major focused in Neuroscience, I immediately thought about the issue of mental illness. I hoped to create an app that would help users to be able to voice their concerns about their mental well-being if they felt they could not do so. Ideally I could create a chat system, map out local mental health professionals, display helpful articles and create a simple login. The biggest concern, and ultimately the task I could not complete, was the chat system. I had hoped to create a system that would connect users who felt they could help in certain topics whether relationships, depression, or simply daily troubles with users who were having trouble in these topics. Though the system was established programmatically with Firebase (just before Google acquired it), it didn't function as intended. Consequently, the remainder was fleshed out as best as possible within the time frame, and the chat system was kept basic. Despite my shortcomings, it taught me a number of important lessons from project management, laying out tasks, and interacting with a number of different technologies.",images:[{src:"https://i.imgur.com/r4lJY2P.png",alt:"Home screen with a tab view to each section of the app, namely the chat, the articles and the healthcare providers."}],github:"github-url"},{name:"Infection Control Android",desc:"This app started in Android before moving more recently into iOS. Originally an idea of my father's, I began this app to help solve an issue of data collection and data visualization for his department, Infection Control, at work. However, as I worked out the details with him, it became more apparent how helpful this app could be for not only his own hospital but for hospitals in general. In his experience, hospitals often lag behind in terms of technology, despite being able to benefit immensely from the revolution data collection and computeres can bring.",images:[{src:"../images/beach.jpeg",alt:"Home screen with several buttons to point users to various data points"}],github:"github-url"},{name:"Work-it Android",desc:"Ever since I started learning iOS, I hoped to be able to duplicate my projects in Android. Eventually, I would be able to take a class focused on Android and use the knowledge that came from learning iOS to move more smoothly into Android. As stated in my iOS section, the idea for this app came from conversations with my best friend about an all encompassing fitness and health app. There are plenty of apps that cover nutrition, and plenty that cover exercise, but we wanted an app that would fit it all in one clean space.",images:[{src:"../images/beach.jpeg",alt:"Home screen displaying "}],github:"github-url"}],"Small-projects":[{name:"Superman or Batman? Android",desc:"The following apps show my small efforts as I grew as an Android developer",images:[{src:"../images/beach.jpeg",alt:"Home screen with a simple button to make more circles (balls) that will float and bounce around the screen."}],github:"github-url"}]}},35:function(e){e.exports={"Major-projects":[{name:"Infection Control Front-end",desc:"Originally an idea of my father's, I began this app on iOS and Android, but as I began to build out the back-end to collect the data pertinent to an Infection & Control Department, I increasingly wanted to work with Angular 2+ for a better understanding of front-end frameworks as well as to allow a better online experience for users of the iOS and Android apps. While an Infection Control Practicioneer could use the phone apps on the go, having a centralized hub to keep track of reports or to control settings across users seemed more and more like an extremely useful feature that would be indispensable once fully fledged.",images:[{src:"https://imgur.com/9GIdK1H.png",alt:"The left side has a filter and the right side a list of professions."},{src:"https://imgur.com/7XXbsi6.png",alt:"The add screen for new profession titles."}],github:"https://github.com/NLCaceres/ng-records",url:"https://fathomless-atoll-23643.herokuapp.com/"},{name:"This Portfolio Site!",desc:"Having not worked with React ever before (or any front-end framework for that matter), I wanted to take my time and learn it as well as I could while also making a project that meant something to myself. I immediately figured what would be better than a portfolio site that I could show my skills in more ways than one. Since first starting this site, I feel I've come a long way in my software development skills not only in Front-End web development but overall from Android Development to even the back-end.",images:[{src:"https://imgur.com/mDVxExd.png",alt:"Home screen displaying mobile version with carousel of images, a short description and github URL"},{src:"https://imgur.com/OLVRFWx.png",alt:"Android tab with open navbar displaying how tabs are changed depending on screen. It's a sticky navbar that slides over screen."}],github:"https://github.com/NLCaceres/resume-react",url:"https://nlcaceres.github.io/resume-react/"},{name:"Car Lords - The New Car Site to Compete and Beat the Rest",desc:"For my last assignment of my ITP 301 class for Web Dev, I wanted to create something that I would find useful in my own life. Though it was incredibly difficult to find data relating to cars (even basic info like car models and makes), over time I was able to accomplish a great deal with limited time and resources. Using the Edmunds API (ten requests a day at the time), I was able to carefully test my DOM manipulation skills and the page itself. Without a front-end framework, I managed to create three 'pages' that dealt with the initial search for a car of a certain model, make and year, displayed a list of articles related to a search keyword, and displayed a list of nearby new and used cars available to buy.",images:[{src:"https://imgur.com/JP9uLEW.png",alt:"For smaller mobile devices, this is the homepage. A navbar, 3 dropdown menus, and footer"},{src:"https://imgur.com/9jcB7k9.png",alt:"For tablet and wider screens, this is the homepage. An expanded navbar, 3 dropdown menus and a full footer"}],github:"https://github.com/NLCaceres/carSearch-Site",url:"https://nlcaceres.github.io/carSearch-Site/"}],"Small-projects":[{name:"The Walking Dead Fansite",desc:"My first official attempt at anything related to Web Development and the Front-End. In my USC class ITP 301, we were instructed to create a fansite for one of our favorite TV shows. At the time, the Walking Dead was probably at its highest viewership with the shock of the season 7 opening and 6 excellent seasons prior. In my little project, I'd create a simple html file with simple css talking about main characters and the first 5 seasons.",images:[{src:"https://i.imgur.com/92xr3mE.png",alt:"Walking Dead Fan Site with descriptions of seasons 1 through 5 as well as several main character descriptions"}],github:"https://github.com/NLCaceres/WD-show-fanpage",url:"https://nlcaceres.github.io/WD-show-fanpage/"},{name:"My Girlfriend and I's Photo Gallery",desc:"As a part of the second assignment for my ITP 301 class, we made a point of overviewing jQuery for a couple weeks which culminated in this project, a simple gallery using jQuery to highlight images and swap in any one that was clicked into a main image frame.",images:[{src:"https://i.imgur.com/wDMkYkJ.png",alt:"Column of photos along the left side with a main image on the right"}],github:"https://github.com/NLCaceres/jQuery-gallery",url:"https://nlcaceres.github.io/jQuery-gallery/"},{name:"Color my Life",desc:"In the third assignment for ITP 301, the task was even more simple than the previous one, namely create a page that describes your life in a nutshell AND javascript that will modify the CSS of various parts of the page. Using radio buttons and a pair of JS functions, a user can easily swap out the background to whatever basic colors they want and to a font color they'd prefer.",images:[{src:"https://i.imgur.com/6lRZSbd.png",alt:"Two columns of radio buttons relating to background and text color with a main image sitting alongside paragraphs about my life and school."}],github:"https://github.com/NLCaceres/js-color-control",url:"https://nlcaceres.github.io/js-color-control/"},{name:"Need a Calculator?",desc:"Getting into the groove of my first Web Development class, we finally got into a project that was a bit more practical and useful, a calculator! Picking out a few images for calculator buttons and laying them out as expected for a calculator, I added onClick attributes to each button which would add numbers to the text input sitting atop. As the user clicks the operators along the side, the number will disappear in the text field and allow the next number to be input until you finally click the equals sign and get your result. Simple and plenty useful!",images:[{src:"https://imgur.com/FduCCFf.png",alt:"Basic calculator with red buttons and a text input sitting atop it for numbers"}],github:"https://github.com/NLCaceres/calculator-webApp",url:"https://nlcaceres.github.io/calculator-webApp/"},{name:"The New and Improved Photo Gallery",desc:"Improving upon the previous jQuery gallery my ITP 301 class had made, I'd change the layout adding more images, focus it around my girlfriend and I's Walt Disney World trip, and use vanilla Javascript alone. The main image frame and row images would function similarly, highlighting onHover, swapping onClick, but I'd include a row of random images underneath the main image and above the gallery of images. With the row of random images, I included a random button that would choose a set of three images to display (though it could choose two of the same). Not perfect, but a good step towards a fully fledged project and one heck of a road trip!",images:[{src:"https://imgur.com/XVzYyDm.png",alt:"Home screen displaying the login. Once logged in, login-screen will no longer be seen until log-out."}],github:"https://github.com/NLCaceres/js-gallery",url:"https://nlcaceres.github.io/js-gallery/"},{name:"These are a Few of My Favorite Sites",desc:"In order to practice HTML manipulation and get a feel for the power Javascript had over the Document Object Model, my class would make one of its last projects, a search bar scanning through a few arrays with website names and keywords related to those websites. Pressing enter with an empty search bar will give you a full list of around 20 websites that I use whether for news, for entertainment or for shopping, but otherwise the search bar will act as one might expect and return any websites that relate to the keyword a user types in.",images:[{src:"https://imgur.com/XJX7BSA.png",alt:"Home screen displaying the login. Once logged in, login-screen will no longer be seen until log-out."}],github:"https://github.com/NLCaceres/bookmark-search",url:"https://nlcaceres.github.io/bookmark-search/"},{name:"The Group Project - Flip through a Fun Van Gogh Flipbook",desc:"As my semester came to a close in ITP 301 Intro to Web Dev, my professor was sure to incorporate a group project into the class, pairing Computer Science Majors with Computer Science Minors. Having the minor under my belt, I paired with a classmate, Duncan, a CS Major. Though our schedules didn't ever seem to fit, this was the perfect opportunity to make use of Github. With Github on our side, we were able to divide and conquer fairly quickly. Unfortunately our merge conflicts made things difficult as our presentations finally arrived, but we fixed them in record time and had a presentable flipbook for all to enjoy.",images:[{src:"https://i.imgur.com/kfmVnZw.png",alt:"Cover Page of Van Gogh Web Flipbook"},{src:"https://i.imgur.com/GYvfv5w.png",alt:"Two Pages on Screen"},{src:"https://i.imgur.com/4NR5Jr9.png",alt:"Actual Page taking up half of screen"}],github:"https://github.com/NLCaceres/itp301-group-project",url:"https://nlcaceres.github.io/itp301-group-project/"}]}},36:function(e){e.exports={"Major-projects":[{name:"Infection Control Back-end",desc:"This app started in Android before moving more recently into iOS. Originally an idea of my father's, I began this app to help solve an issue of data collection and data visualization for his department, Infection Control, at work. However, as I worked out the details with him, it became more apparent how helpful this app could be for not only his own hospital but in general. In his experience, hospitals often lag behind in terms of technology, despite being able to benefit immensely from the revolution data collection and computeres can bring.",images:[{src:"../images/beach.jpeg",alt:"Home screen with several buttons to point users to various data points"}],github:"github-url"},{name:"Work-it Back-end",desc:"Ever since I started learning iOS, I hoped to be able to duplicate my projects in Android. Eventually, I would be able to take a class focused on Android and use the knowledge that came from learning iOS to move more smoothly into Android. As stated in my iOS section, the idea for this app came from conversations with my best friend about an all encompassing fitness and health app. There are plenty of apps that cover nutrition, and plenty that cover exercise, but we wanted an app that would fit it all in one clean space.",images:[{src:"../images/beach.jpeg",alt:"Home screen displaying "}],github:"github-url"}],"Small-projects":[{name:"Playing with UI-Kit Back-end",desc:"The remaining apps showcase my simple attempts in several iOS focused classes to incorporate various libraries from Apple and Facebook. In this particular example, we were actually instructed to create a small app that would create balls to bounce across the screen, interacting with each other thanks to UI-Kit and its physics that you can apply",images:[{src:"../images/beach.jpeg",alt:"Home screen with a simple button to make more circles (balls) that will float and bounce around the screen."}],github:"github-url"}]}},39:function(e,t,a){e.exports=a(58)},57:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(12),i=a(13),o=a(15),s=a(14),r=a(5),l=a(16),c=a(1),h=a.n(c),d=a(17),m=a.n(d),u=a(11),p=a(38),g=a(59),f=a(60),b=a(61),w=a(62),v=a(63),y=a(64),k=a(65),I=a(3),j=a.n(I),O=a(18),T=a.n(O),E=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).state={isOpen:!1},a.toggle=a.toggle.bind(Object(r.a)(a)),a}return Object(l.a)(t,e),Object(i.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return h.a.createElement(h.a.Fragment,null,h.a.createElement(g.a,{className:j()(T.a.header,"sticky-top"),light:!0,expand:"md"},h.a.createElement(S,{toggleFunc:this.toggle,openTab:this.props.openTab,isOpened:this.state.isOpen,activeTab:this.props.activeTab,viewWidth:this.props.viewWidth})))}}]),t}(c.Component),S=function(e){return h.a.createElement(h.a.Fragment,null,h.a.createElement(f.a,{onClick:e.toggleFunc}),e.viewWidth<768?h.a.createElement(W,{isOpened:e.isOpened,openTab:e.openTab,activeTab:e.activeTab,viewWidth:e.viewWidth,collapseNav:e.toggleFunc}):h.a.createElement(x,{isOpened:e.isOpened,openTab:e.openTab,activeTab:e.activeTab,viewWidth:e.viewWidth}))},W=function(e){return h.a.createElement(h.a.Fragment,null,h.a.createElement(b.a,{className:j()(T.a.header,"border border-dark rounded thick-border","px-3 py-1","font-weight-bold"),href:"/"},"Nick Caceres"),h.a.createElement(w.a,{isOpen:e.isOpened,navbar:!0},h.a.createElement(C,{openTab:e.openTab,activeTab:e.activeTab,viewWidth:e.viewWidth,collapseNav:e.collapseNav})))},x=function(e){return h.a.createElement(h.a.Fragment,null,h.a.createElement(w.a,{isOpen:e.isOpened,navbar:!0},h.a.createElement(C,{openTab:e.openTab,activeTab:e.activeTab,viewWidth:e.viewWidth})),h.a.createElement(b.a,{className:j()(T.a.brand,"border border-dark rounded thick-full-border","px-3 py-1","font-weight-bold"),href:"/"},"Nick Caceres"))},C=function(e){return h.a.createElement(v.a,{pills:!0,className:j()({"flex-row":e.viewWidth>=768,"flex-column":e.viewWidth<768})},h.a.createElement(A,{activeTab:e.activeTab,openTab:e.openTab,collapseNav:e.collapseNav,viewWidth:e.viewWidth}))},A=function(e){var t={iOS:"iOS",android:"Android","front-end":"Front-End Web","back-end":"Back-End Web"};return Object(p.a)(Array(4)).map(function(a,n){var i;return h.a.createElement(y.a,{className:"mx-3 mx-md-1 mt-1 px-0",key:t[Object.keys(t)[n]]},h.a.createElement(k.a,{href:"#",className:j()("d-flex justify-content-center no-wrap","mx-1","px-1",(i={},Object(u.a)(i,T.a.navButton,e.activeTab!==Object.keys(t)[n]),Object(u.a)(i,T.a.activeNavButton,e.activeTab===Object.keys(t)[n]),Object(u.a)(i,"active",e.activeTab===Object.keys(t)[n]),i)),onClick:function(){e.openTab(Object.keys(t)[n]),window.scrollTo(0,0),e.viewWidth<768&&e.collapseNav()}},t[Object.keys(t)[n]]))})},N=E,P=a(71),L=a(72),H=a(73),D=a(74),F=a(75),M=a(76),B=a(77),_=a(31),U=a(66),q=a(67),G=a(68),R=a(22),V=a.n(R),z=(a(25),[]),J=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).state={activeIndex:0},a.next=a.next.bind(Object(r.a)(a)),a.previous=a.previous.bind(Object(r.a)(a)),a.goToIndex=a.goToIndex.bind(Object(r.a)(a)),a}return Object(l.a)(t,e),Object(i.a)(t,[{key:"next",value:function(){if(!this.animating){var e=this.state.activeIndex===z.length-1?0:this.state.activeIndex+1;this.setState({activeIndex:e})}}},{key:"previous",value:function(){if(!this.animating){var e=0===this.state.activeIndex?z.length-1:this.state.activeIndex-1;this.setState({activeIndex:e})}}},{key:"goToIndex",value:function(e){this.animating||this.setState({activeIndex:e})}},{key:"render",value:function(){var e=this,t=this.state.activeIndex,a=this.props.images;console.log("Current viewWidth: "+this.props.viewWidth);var n=a.map(function(t){return h.a.createElement(_.a,{key:t.src},h.a.createElement("img",{className:j()("img-fluid",e.props.viewWidth>=768?V.a.slide:V.a.mobileSlide),src:t.src,alt:t.altText}),h.a.createElement(U.a,{captionText:""}))});return h.a.createElement(q.a,{activeIndex:t,next:this.next,previous:this.previous,pause:!1,ride:"carousel",interval:!1,className:j()(V.a.full)},h.a.createElement(G.a,{items:a,activeIndex:t,onClickHandler:this.goToIndex}),n)}}]),t}(c.Component),K=a(80),X=a(69),Y=a(70),Q=a(32),Z=a.n(Q),$=(a(25),function(e){var t,a,n,i=e.project;return i&&(t=i.name,n=(a=i.images).length>1?h.a.createElement(J,{images:a,viewWidth:e.viewWidth}):1===a.length?h.a.createElement("img",{src:a[0].src,alt:a[0].alt,className:j()("img-fluid",Z.a.cardImg)}):null),h.a.createElement(h.a.Fragment,null,h.a.createElement(K.a,{isOpen:e.isModalOpen,toggle:function(){e.modalControl(null)},className:"modal-dialog-centered"},h.a.createElement(X.a,{toggle:function(){e.modalControl(null)}},t),h.a.createElement(Y.a,null,n)))}),ee=a(10),te=a.n(ee),ae=a(33),ne=a(34),ie=a(35),oe=a(36),se=a(25),re=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).state={width:window.innerWidth,modal:!1,modalProject:null},a.openModal=a.openModal.bind(Object(r.a)(a)),a}return Object(l.a)(t,e),Object(i.a)(t,[{key:"openModal",value:function(e){if(null===e)this.setState(function(e){return{modal:!e.modal}});else{if(this.props.viewWidth<768)return;this.setState(function(t){return{modal:!t.modal,modalProject:e}})}}},{key:"render",value:function(){return h.a.createElement("div",null,h.a.createElement("h1",null,this.props.tabId),h.a.createElement(le,{tabId:this.props.tabId,viewWidth:this.props.viewWidth,modalControl:this.openModal}),this.props.viewWidth>=768&&h.a.createElement($,{modalControl:this.openModal,isModalOpen:this.state.modal,project:this.state.modalProject,viewWidth:this.props.viewWidth}))}}]),t}(c.Component),le=function(e){var t;return t="iOS"===e.tabId?ae:"Android"===e.tabId?ne:"Front-End"===e.tabId?ie:oe,Object.keys(t).map(function(a,n){var i=a.replace(/-/g," ").replace(/\b\w/g,function(e){return e.toUpperCase()});console.log("This is project type and a key: "+a);var o=e.tabId+" "+a,s=t[a];return h.a.createElement("div",{key:o},h.a.createElement("h1",null,i),h.a.createElement(ce,{projects:s,viewWidth:e.viewWidth,modalControl:e.modalControl}))})},ce=function(e){var t=e.projects;console.log("These projects were passed: "+se.inspect(t,!1,null,!0));var a=Object.keys(t);return console.log("With these keys: "+a),t.map(function(t,a){return console.log("This is the project name: "+t.name),console.log("This is the project info: "+t),a%2===0||e.viewWidth<768?h.a.createElement(he,{project:t,modalControl:e.modalControl,viewWidth:e.viewWidth,key:t.name}):h.a.createElement(de,{project:t,modalControl:e.modalControl,viewWidth:e.viewWidth,key:t.name})})},he=function(e){var t=e.project,a=t.images[0].src,n=t.images[0].alt;return h.a.createElement(h.a.Fragment,null,h.a.createElement(P.a,null,h.a.createElement(L.a,{noGutters:!0},h.a.createElement(H.a,{xs:"12",md:"2",className:"d-flex justify-content-center"},e.viewWidth>=768||t.images.length<=1?h.a.createElement("img",{className:j()("img-fluid",te.a.cardImg,Object(u.a)({},te.a.clickable,e.viewWidth>=992)),src:a,alt:n,onClick:function(){e.modalControl(t)},onError:function(e){e.target.onerror=null,e.target.src="https://via.placeholder.com/350.png?text=Project"}}):h.a.createElement(J,{images:t.images,viewWidth:e.viewWidth})),h.a.createElement(H.a,{xs:"12",md:"10"},h.a.createElement(D.a,null,h.a.createElement(F.a,null,t.name),h.a.createElement(M.a,null,t.desc),h.a.createElement(B.a,{className:j()(te.a.githubLink,te.a.blockButton,"font-weight-bold",{"d-block":e.viewWidth>=992}),href:t.github},"Github Page"),null!=t.url&&h.a.createElement(B.a,{className:j()(te.a.blockButton,"font-weight-bold btn-danger",{"ml-4":e.viewWidth<992},{"d-block mt-4":e.viewWidth>=992}),href:t.url},"Home Page"))))))},de=function(e){var t=e.project,a=t.images[0].src,n=t.images[0].alt;return h.a.createElement(h.a.Fragment,null,h.a.createElement(P.a,null,h.a.createElement(L.a,{noGutters:!0},h.a.createElement(H.a,{xs:"12",md:"10"},h.a.createElement(D.a,null,h.a.createElement(F.a,null,t.name),h.a.createElement(M.a,null,t.desc),h.a.createElement(B.a,{className:j()(te.a.githubLink,te.a.blockButton,"font-weight-bold",{"d-block":e.viewWidth>=992}),href:t.github},"Github Page"),null!=t.url&&h.a.createElement(B.a,{className:j()(te.a.blockButton,"font-weight-bold btn-danger",{"ml-4":e.viewWidth<992},{"d-block mt-4":e.viewWidth>=992}),href:t.url},"Home Page"))),h.a.createElement(H.a,{xs:"12",md:"2"},h.a.createElement("img",{className:j()("img-fluid",te.a.cardImg,Object(u.a)({},te.a.clickable,e.viewWidth>=768)),src:a,alt:n,onClick:function(){e.modalControl(t)},onError:function(e){e.target.onerror=null,e.target.src="https://via.placeholder.com/350.png?text=Project"}})))))},me=re,ue=a(78),pe=a(79),ge=a(23),fe=a.n(ge);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(56),a(57);var be=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).openTab=a.openTab.bind(Object(r.a)(a)),a.state={activeTab:"iOS",width:window.innerWidth},a.updateWindowDimensions=a.updateWindowDimensions.bind(Object(r.a)(a)),a}return Object(l.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",fe()(this.updateWindowDimensions(),500))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",fe()(this.updateWindowDimensions(),500))}},{key:"updateWindowDimensions",value:function(){var e=this;return fe()(function(){e.setState({width:window.innerWidth})})}},{key:"openTab",value:function(e){this.state.activeTab!==e&&this.setState({activeTab:e})}},{key:"render",value:function(){return h.a.createElement(h.a.Fragment,null,h.a.createElement(N,{openTab:this.openTab,activeTab:this.state.activeTab,viewWidth:this.state.width}),h.a.createElement(ue.a,{activeTab:this.state.activeTab,className:"mx-3"},h.a.createElement(pe.a,{tabId:"iOS"},h.a.createElement(me,{tabId:"iOS",viewWidth:this.state.width})),h.a.createElement(pe.a,{tabId:"android"},h.a.createElement(me,{tabId:"Android",viewWidth:this.state.width})),h.a.createElement(pe.a,{tabId:"front-end"},h.a.createElement(me,{tabId:"Front-End",viewWidth:this.state.width})),h.a.createElement(pe.a,{tabId:"back-end"},h.a.createElement(me,{tabId:"Back-End",viewWidth:this.state.width}))))}}]),t}(c.Component);m.a.render(h.a.createElement(be,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[39,1,2]]]);
//# sourceMappingURL=main.d488ae21.chunk.js.map