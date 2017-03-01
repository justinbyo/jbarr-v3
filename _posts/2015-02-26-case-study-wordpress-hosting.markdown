---
layout: post
pagetype: blog
title:  "WordPress Hosting"
date:   2015-02-26 17:39:21
subtitle: "UX research, information architecture, and UI design"
description: "When Media Temple improved their WordPress hosting platform with a new on-boarding flow and a slate of new features, I had the opportunity to seriously reevaluate the product&rsquo;s UX. I designed a friendly on-boarding process, reorganized the navigation and features in the control panel, and planned the product&rsquo;s information architecture to accommodate future features."
---

<p class="subtitle"><strong>Case study:</strong> UX Research and UI Design</p>

<h3>Retrofitting a strong foundation</h3>

In 2014, Media Temple added [WordPress Hosting][mtwordpress] to its suite of hosting and cloud solutions. The product included a custom control panel &mdash; within the scope of the larger Media Temple control panel &mdash; that made it easy for users to create and manage their WordPress sites, and offered tools and extras like automated backups, staging sites, git integration, and custom themes.

While the product was performant and had a strong adoption rate, it needed some serious improvement. For one, the control panel never underwent a serious UX process before it was built. There was no on-boarding process for new users and &mdash; worse yet &mdash; there wasn&rsquo;t a strong foundation to incorporate new features into the control panel.

With the introduction of a new on-boarding flow, along with a slate of new features, I had the opportunity to seriously reevaluate the product&rsquo;s UX. I designed a friendly on-boarding process, reorganized the navigation and features in the control panel, and planned the product&rsquo;s information architecture to accommodate future features.

<h3>Mind-mapping the product requirements</h3>

The UX process started with a hefty set of user stories. During the on-boarding process, users would now have the option to create a brand new WordPress site, import a WordPress site from another hosting service, or migrate a WordPress site from another Media Temple service. This product update also bundled a few services like 1-click SSL certificate installations, a domain name, [Google Apps for Work][googleappscasestudy] inboxes, and Media Temple&rsquo;s proprietary security monitoring widget. The goal was to create an experience that makes it easy for users to host, manage, and secure their WordPress sites.

There was a lot to fit into the control panel. I started by mind-mapping how the user stories translated into features and how those features might be organized in the UI. I also used card sorting with team members to help finesse the control panel&rsquo;s navigation.

<img class="large" src="/images/wordpress-mind-mapping.jpg" />

<p class="caption"><strong>Left:</strong> Card sorting results. <strong>Right:</strong> Features mind-mapped on a whiteboard.</p>

<h3>Sketching and iteration</h3>

This product posed two big challenges:

First, we had to facilitate the user in creating or migrating their WordPress site on our platform. The onboarding experience had to describe and solicit  &mdash; in a friendly, human way &mdash; technical information like installation directories and FTP credentials. It also had to communicate the platform&rsquo;s architecture to the user. We took care to make sure the user understood how their WordPress sites and credentials are organized under their Media Temple account.

Second, the control panel was challenging because the various features were dissimilar enough to complicate the control panel&rsquo;s information architecture. For example, two included SSL certificates are installed on a per-site basis, but Google Apps inboxes are tied to a single domain and on-boarded separately.

With this in mind, I started exploring the user flow by consulting with our engineers to fully understand how our back-end provisions and connects our WordPress Hosting with the rest of our services. I also took a look at the on-boarding and control panels of competitor services, like [Flywheel][flywheel] or [WPEngine][wpengine]. I synthesized this info into a comprehensive user flow that accommodated engineering requirements.

<img class="large" src="/images/wordpress-user-flow.png" />


Once the user flow was finalized, I moved on to one of my favorite steps: sketching. I moved quickly to sketching the UI in high-fidelity, which made it easy to communicate my thinking to team members and stakeholders. It also served as a strong start to my wireframing process.

<img class="" src="/images/wordpress-panel-sketch.jpg" />

<p class="caption">I used sticky notes to map out and reorganize interactions in the control panel.</p>





<h3>Wireframing and prototyping</h3>

I used [UXPin][uxpin] to create high-fidelity wireframes of both the on-boarding experience and control panel UI with extensive notations, based off my sketches. This included a multi-step tour of the product&rsquo;s control panels. UXPin wireframes are web-based, and I prefer them as deliverables since stakeholders can easily share or comment on them.

<img class="large" src="/images/wordpress-onboard-wireframes.png" />

<p class="caption"><strong>Above:</strong> Three on-boarding paths. From left to right, create a new site, import a site, migrate a site.</p>

<img class="large" src="/images/wordpress-my-site-control-panel.png" />

<p class="caption"><strong>Above:</strong> The control panel to manage a single WordPress site, with notations.</p>





<h3>Visual design and UI</h3>

I worked closely with our visual designer [Ryan Morgan][ryanmorgan] as he transformed my wires and prototypes into full-fidelity mockups. We developed a card-based style that would allow for future extensibility when new features are eventually added to the panel. As the user experience became increasingly vivid, we challenged some assumptions I had and continued to finesse the finer points of the more complicated interactions, like SSL installation.

<img class="large" src="/images/wordpress-onboard-ui.png" />

<p class="caption"><strong>Above:</strong> Steps in the on-boarding process.</p>

<img class="large" src="/images/wordpress-my-site-ui.png" />

<p class="caption"><strong>Above:</strong> Managing a single WordPress site.</p>

<img class="large" src="/images/wordpress-all-sites-ui.png" />

<p class="caption"><strong>Above:</strong> High-level management of all hosted WordPress sites, with bundled services on the left.</p>

[mtwordpress]: http://mediatemple.net/wordpress/
[googleappscasestudy]: /case-study-google-apps-reselling.html
[flywheel]: https://getflywheel.com/
[wpengine]:    http://wpengine.com/
[ryanmorgan]: http://900rpm.com/
[uxpin]: http://uxpin.com/
