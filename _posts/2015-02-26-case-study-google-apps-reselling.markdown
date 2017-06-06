---
layout: post
pagetype: blog
title:  "Google Apps Hosting Package"
date:   2015-02-25 17:39:21
subtitle: "UX research, information architecture, and UI design"
description: "Media Temple launched a new hosting package integrating Google Apps for Work. It&rsquo;s a one-stop shop for setting up a web presence, including a website and Google Apps using a custom domain name. I designed an on-boarding experience and control panel UI intended to make the entire process simple and easy."
---

<p class="subtitle"><strong>Case study:</strong> UX research and UI design</p>

<h3>A one-stop-shop for your web presence</h3>

In response to user demand for a better, cloud-driven email product, Media Temple in 2014 introduced the [Google Apps for Work bundle][mtgoogleapps]. The idea was to create a one-stop-shop for setting up your web presence. Through a single purchase from the Media Temple control panel, a user could set up both a website and their company&rsquo;s Google Apps service at one time, all with a unique domain name.

The product called for an on-boarding experience and control panel UI, through which the user would: <strong>1.</strong> select a domain to use with their Gmail address and <strong>2.</strong> create and manage Gmail accounts for their team-members. A major goal of the product was to transition customers that use Media Temple&rsquo;s aging proprietary email service to the industry-leading Gmail, while improving their workflow. We built the on-boarding and control panel experience using the Google Apps reseller API.


<h3>Researching the product requirements</h3>

The UX process started with the user stories necessary to ship an MVP. This was a new product for Media Temple, and before we committed to an expansive list of features, we wanted to prove our hypotheses &mdash; that existing users want to migrate to Gmail and that new customers want our one-stop-shop solution.

I started by breaking down user stories into features, and mind-mapping them into what I considered intuitive groupings. In the on-boarding experience, users only had to select the domain they want to use and then create their first administrator account. In the control panel, users were limited to creating, editing, and deleting Gmail users and groups.

<img class="" src="{{ site.github.url }}/images/google-apps-mindmapping.jpg" />
<p class="caption">Features mind-mapped on a whiteboard.</p>

<h3>Sketching and iteration</h3>

I already knew a few things as I started crafting the experience:

First, I wanted the on-boarding process to be linear, conversational, and short. I wanted to conserve the user&rsquo;s cognitive bandwidth (and patience) for tricky steps like updating DNS records.

Second, I wanted the control panel to include as few distinct screens as possible. This was an MVP and we certainly weren&rsquo;t recreating the wheel Google built. We used Angular.js to create an app-like experience that revolves around three screens: user management, group management, and company/organization management.

I started exploring the user flow by consulting with both Media Temple and Google engineers to understand how our provisioning systems work together. I stressed that we do as much as possible for the user on their behalf, especially when it comes to filling out form fields or polling their DNS records.

<img class="large" src="{{ site.github.url }}/images/google-apps-flow-whiteboard.jpg" />

<p class="caption"><strong>Above:</strong> Whiteboard sketch of the purchase and on-board flow.</p>

<img class="large" src="{{ site.github.url }}/images/google-apps-ac-whiteboard.jpg" />

<p class="caption"><strong>Above:</strong> Some initial thoughts on organizing the control panel, sketched on a whiteboard.</p>

The biggest challenge &mdash; typical of UX design for web hosting &mdash; dealt with guiding the user in updating their DNS records in order to use their personal domain name as their Gmail address. We wanted to make this as easy as possible by providing a step-by-step flow as well as links to the Media Temple KnowledgeBase for additional help.

<img class="" src="{{ site.github.url }}/images/google-apps-dns-whiteboard.jpg" />
<p class="caption">Sketches of the DNS flow that I put together with our software developer, Nate.</p>

With the Media Temple and Google engineers, I got into the technical details of both Google&rsquo;s reseller API and our own provisioning system to determine the best flow for account creation.

<img class="large" src="{{ site.github.url }}/images/google-apps-user-flow.png" />
<p class="caption">The user flow from start to finish.</p>

<h3>Wireframing and prototyping</h3>

I used [UXPin][uxpin] to create high-fidelity wireframes of both the on-boarding experience and control panel UI, with extensive notations. This included a multi-step tour of the product&rsquo;s control panels. UXPin wireframes are web-based, and I prefer them as deliverables since stakeholders can easily share or comment on them.

I conducted user tests to validate the painstaking work we did in our on-boarding flow to make DNS migration easy. Using [InVision][invision], I created a simple, clickable prototype of the domain search and purchase process, user on-boarding, and a short tour of the control panel. I recruited [five people][usertests] from various departments, including support, sales, and HR and offered them Starbucks as a thank you for participating. We made some immediate improvements based off their mostly positive feedback.

<img class="large" src="{{ site.github.url }}/images/google-apps-control-panel.png" />

<p class="caption"><strong>Above:</strong> User management in the control panel.</p>

<img class="large" src="{{ site.github.url }}/images/google-apps-ui-detail.png" />

<p class="caption"><strong>Above:</strong> Notations that detail a user interaction in the wireframes.</p>



<h3>Visual design and UI</h3>

I worked closely with our visual designer [Ryan Morgan][ryanmorgan] as he transformed my wires and prototypes into full-fidelity mockups. From the start, we wanted the visual design to stress simplicity.

<img class="" src="{{ site.github.url }}/images/google-apps-onboard-ui.png" />

<p class="caption"><strong>Above:</strong> Steps in the on-boarding process.</p>


<img class="" src="{{ site.github.url }}/images/google-apps-manage-user.png" />

<p class="caption"><strong>Above:</strong> Control panel for managing Google Apps users.</p>

[mtgoogleapps]: http://mediatemple.net/services/googleapps/
[popco]:    http://pop.co/
[godaddyoffice]: https://www.godaddy.com/business/office-365.aspx
[usertests]: http://www.nngroup.com/articles/how-many-test-users/
[uxpin]: http://uxpin.com/
[ryanmorgan]: http://900rpm.com/
[invision]: http://invisionapp.com/
