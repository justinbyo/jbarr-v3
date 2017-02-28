---
layout: post
pagetype: blog
title:  "Farmers Insurance App Rebuild"
date:   2017-02-28 17:39:21
subtitle: "Visual design, project management, Agile methodology"
description: "###"
---

<p class="subtitle"><strong>Case study:</strong> Visual design, project management, Agile methodology</p>

<h3>Managing design debt with an Agile process</h3>

At Carbon Five, we partner with clients who not only want their project to be designed and developed with a high level of craftsmanship, but who want to improve their team’s process by being immersed in an Agile environment.

Farmers Insurance had an existing app in production for both Android and iOS, and they wanted Carbon Five to train their new team in Agile by kickstarting a complete rebuild of both apps’ codebases. (Note: I’ll refer to both the apps singularly as “the app” out of convenience.)

The original Farmers app was built over the course of at least two years, by a few different third-party designers and developers, and it encompassed some complex customer-facing business functions: insurance policy details, billing accounts and payments, agent interactions, etc.

The staggered engagements with third-party vendors put the codebase in a bad state of technical debt. And like the codebase, the design was messy and saddled with debt: design elements were inconsistent not only between Android and iOS, but between devices on the same platform.

I led the design team, which had the challenge ahead of us to reconcile the design inconsistencies across every version of the app and create a brand new style guide which would serve as the source of truth for design on the project moving forward. Most importantly, we had to establish a design process that not only complemented the cadence of the developers’ Agile practice, but improved knowledge transfer between the disciplines.

<h3>Small, quick releases</h3>

The development team had a head start on the project, so we made the decision early on to map our design tasks to the limited scope of the user stories, helped us prioritize and produce designs quickly. If specific content or an interaction wasn’t specified in the user story’s acceptance criteria, it wasn’t necessary to include it in our designs yet. We worked closely with the team to determine the smallest and simplest component we could design that satisfies the story. We only worried about what the developers needed to worry about.

<h3>Living style guide</h3>

We built our style guide as a Sketch document and maintained it using git. This approach complemented our small release strategy and allowed us to incrementally add new components to the style guide as they were introduced by our stories.

Ideally, we wanted to set up a design delivery system akin to a [living style guide][livingstyleguide], a type of UI pattern library used in web development. In a living style guide, UI components are defined (or updated) in one place and automatically applied project-wide thanks to CSS styles and automated compiling tools. We aimed to apply this model to our Sketch workflow.

[screenshot of farmers style guide]

As we built components and layouts, we were thoughtful to construct them as [atomic objects][atomic]. Since there is no notion of classes in Sketch, we aggressively leveraged the app’s [symbols feature][symbols] as an analog. As a rule, if we ever used more than one instance of a particular element, we turned it into a Sketch symbol for easy re-use and organization.

[symbols close up]

The developers had access to our design repo and the Sketch document. Our symbol collection provided a quick way for them to determine how to code repeatable UI patterns.

<h3>Responsive app design</h3>

In creating the style guide, we needed to keep our designs scalable. One of the big failures of the original app development was that the layout was implemented separately at every device size. Assets for the iPhone 5 were exported and laid out independent of the iPhone 6, and the iPhone 6 Plus, etc. This is the main reason for visual inconsistency across devices. Rather than coding an element like a button to allow it to “flex” and fit variable screen sizes, the original developers sliced a different button image for every screen size.

[measurements illustration]

We wanted to fix this. Informed by front-end web design, we wanted to programmatically create elements that flexed to fit the device’s screen. Using the concept of responsive web design as a mental model, we explored how to best implement the idea of a responsive app with the input of our developers.

[measurements screenshot]

We had to retrofit an existing design pattern to work fluidly on every screen design. We determined the best way to do this would be to completely avoid fixed measurements of a given element’s width and height. Instead, we specified the measurements of an element’s padding and margin on an iPhone 5, our smallest device. Now, an element like a container can scale up on any screen size without requiring device-specific dimensions or image assets.

<h3>Design once, measure twice</h3>

We made the choice early on to consolidate all our design specs for both platforms and all device sizes into a single style guide. We didn’t want to spend unnecessary time recreating the same documentation twice. Since both the Android and iOS developers would be referencing the same document, we devised an annotation method to accommodate both platforms.

[screenshot of notation system]

To make our design specs as clear and simple as possible for developers, we decided to measure visual elements in both dp and pt. To make things even clearer, we wanted all measurements to have a 1 dp to 1 pt ratio, meaning we’d have a single value for a given element on both Android and iOS. Now whether a developer is inspecting the Sketch document or the product owner is referencing an exported PNG, everyone on the team is speaking the same language when it comes to measurements.

<h3>Takeaways</h3>

Embracing Agile methodology allowed our design team to quickly and continually produce the most important design work every week. By consciously building our style guide in an atomic, incremental, and platform-flexible way, we optimized the knowledge transfer between the design, development, and product teams. Most importantly, Farmers Insurance left our engagement with a maintainable and repeatable system for integrating design into their development process.

[livingstyleguide]: https://www.smashingmagazine.com/2015/04/an-in-depth-overview-of-living-style-guide-tools/
[atomic]: http://bradfrost.com/blog/post/atomic-web-design/
[symbols]: https://www.sketchapp.com/learn/documentation/07-symbols/
