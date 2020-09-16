+++
date = "2020-09-15"
title = "Eclipse Kuksa Breaks Down Automotive Silos to Provide A Platform for Vehicle-To-Cloud Connectivity"
seo_title = "Case Study: Eclipse Kuksa Breaks Down Automotive Silos to Provide A Platform for Vehicle-To-Cloud Connectivity"
link = "/community/resources/case-studies/pdf/Eclipse%20IoT%20Success%20Story%20-%20Kuksa.pdf"
image = "/community/resources/case-studies/images/kuksa.jpg"
company = "Kuksa"
description = "In August 2018, the pan-European team working on the Application Platform for Cars and Transportation Vehicles (APPSTACLE) research project determined it was the right time to move the project to an open source software platform."
categories = ["case_study"]
+++

In August 2018, the pan-European team working on the Application Platform for Cars and Transportation Vehicles ([APPSTACLE](https://itea3.org/project/appstacle.html)) research project determined it was the right time to move the project to an open source software platform. The team published its rationale in a Strategic Standardization Plan that summarized the benefits of moving to open source and its reasons for choosing the Eclipse Foundation as the home for its open source evolution. 

The APPSTACLE project received ITEA 3 public funding from October 2016 to December 2019. Johannes Kristan, one of the original APPSTACLE project members, summarizes the necessity of the move to ensure sustainability. 

“We had three years of public funds to work on the APPSTACLE project and at the end of it, the results had to be able to live on their own,” he says. “Otherwise, after those three years, the research project would be over, the work would be abandoned, and no one would be using the collective results of the research.” 

Contributing the research project to a not-for-profit organization specializing in open source platforms made sense to the entire team. 

“We realized quite early in the project that if you’re creating this type of platform, it must be open source. Otherwise, we’re using public money to develop a platform that can only be used and extended by consortium partners,” explains Kristan. “As an open source project, the work we’re doing can be accessed and used by the public.” 

Initiating and working on Eclipse Kuksa became a major aspect of the APPSTACLE project, and the team [celebrated the first release of Kuksa in September 2019](https://www.eclipse.org/community/eclipse_newsletter/2020/january/1.php). When the release was [announced on the ITEA 3 website](https://itea3.org/news/itea-appstacle-project-announces-eclipse-kuksa-platform-for-car-to-car-to-cloud.html), Matti Frisk, the European project coordinator, said, “by choosing open source, the APPSTACLE project has laid the groundwork for adapting adapting automotive products to the interconnected future.”

## An Open Source Ecosystem for Vehicle-To-Cloud Scenarios

Today, vehicle manufacturers and automotive suppliers take different, proprietary approaches to invehicle and internet connections. Vehicle manufacturers are at about the same state as smartphone manufacturers were a dozen or more years ago when every major player was working to establish its own operating system and ecosystem. There are two major issues with this fragmented approach in the automotive domain: 

* Vehicle owners cannot easily transfer the in-vehicle apps, data, and technologies they rely on to a new vehicle. 

* Automotive suppliers must provide apps for each different vehicle platform, making development repetitive and costly. These challenges mean suppliers may be forced to focus on providing apps for only a few platforms. 

Eclipse Kuksa provides an open, accessible platform that allows all players in the automotive industry to take a common approach to vehicle-tocloud scenarios and reduce the costs associated with repetitive development efforts.

## Unifying Frameworks and Technologies

Eclipse Kuksa unifies vehicle, Internet of Things (IoT), cloud, and security technologies across the complete tooling stack for the connected vehicle domain to enable a standardized approach to Vehicle-To-Cloud (V2C) scenarios across all vehicles (Figure 1). It provides. 

* **An in-vehicle platform.** The in-vehicle platform consists of a container-based app runtime and supporting facilities that sit on top of a Linux-based operating system, such as Automotive Grade Linux (AGL), Apertis, or Debian. 

The platform provides a controlled environment to execute new vehicle functionality as well as access to vehicle data. Data access is provided in a secure and standardized way using open source implementations of the World Wide Web Consortium (W3C) Vehicle Information Service Specification (VISS) standard and the SENSOR Interface Specification (SENSORIS) standard for collecting vehicle and sensor data. Compliance with these standards makes it easier for vehicle manufacturers of all sizes to meet European Union regulations for accessing in-vehicle data. 

* **A cloud backend.** The cloud backend integrates several projects from the [Eclipse IoT Working Group](https://iot.eclipse.org/), including [Eclipse Hono](https://www.eclipse.org/hono/), [Eclipse hawkBit](https://www.eclipse.org/hawkbit/), and in future releases, [Eclipse Ditto](https://www.eclipse.org/ditto/), to provide a common, Kubernetes-based deployment for an automotive IoT cloud backend. It also includes an app store that offers a user-focused management interface and automated deployment of in-vehicle apps using Eclipse hawkBit as the underlying technology. 

* **An IDE.** The IDE, which is based on [Eclipse Che](https://www.eclipse.org/che/) and Microsoft Visual Studio Code, automates in-vehicle app development. The IDE interacts with the app store to simplify app deployments. 

Future Kuksa releases will include [Eclipse Theia](https://theia-ide.org/) extensions. These extensions comply with Eclipse Che 7 and support the Kuksa in-vehicle application build processes, application registrations, and transmissions to the Eclipse Kuksa Appstore and the Eclipse Kuksa Cloud.

Like all research projects at the Eclipse Foundation, Kuksa fosters open collaboration across academic, business, and public sector interests. Along with academic institutions from Germany, the Netherlands, and Finland, a number of corporations have joined the project.

![Figure 1: The Eclipse Kuksa Ecosystem (Third-party trademarks are the property of their respective owners.)](/community/resources/case-studies/images/kuksa-figure-1.png)

*Figure 1: The Eclipse Kuksa Ecosystem (Third-party trademarks are the property of their respective owners.)*

The platform provides a controlled environment to execute new vehicle functionality as well as access to vehicle data. Compliance with these standards makes it easier for vehicle manufacturers of all sizes to meet European Union regulations for accessing in-vehicle data.

Like all research projects at the Eclipse Foundation, Kuksa fosters open collaboration across academic, business, and public sector interests. Along with academic institutions from Germany, the Netherlands, and Finland, a number of corporations have joined the project.

“The real benefit is that with Kuksa deployed in the vehicle and on the back end, it’s extremely easy to retrieve data from the vehicle, control certain vehicle functionality, and add new functionality as it becomes available.” – Johannes Kristan

The collaboration among ecosystem participants is already enabling real-world results. Kristan describes two Kuksa-based applications demonstrated by Turkish commercial vehicle manufacturer, Otokar: 

* **Authenticating bus drivers.** With this mobile app, drivers can only start a bus after they’ve logged in and been authorized to do so. This prevents drivers from accidentally taking the wrong bus. The technology also simplifies management of bus keys because bus access is provided in a more centralized, on-demand way.

* **Identifying unsafe driving habits.** This app collects data from sensors on buses so bus companies can identify overly aggressive drivers and determine why incident rates are high for particular drivers.

Kristan also describes a remote vehicle assistance solution developed by Bosch. With this system, a vehicle repair shop can access vehicles remotely to analyze problems and, if possible, send electronic fixes to resolve them. 

“These are just a few of the possibilities with Kuksa,” explains Kristan. “The real benefit is that with Kuksa deployed in the vehicle and on the back end, it’s extremely easy to retrieve data from the vehicle, control certain vehicle functionality, and add new functionality as it becomes available.”

As Johannes Kristan looks back at the APPSTACLE project’s strategic move to the Eclipse Foundation, the benefits to the project and its expanded ecosystem make it clear the move was the right one. 

As the largest open source organization in Europe, the Eclipse Foundation provides governance, processes, mentorship, intellectual property management, and community building services that allow researchers, industry, and public organizations to collaborate effectively throughout the life cycle of research projects. 

“The Eclipse Foundation is very established in Europe and extremely credible in open source globally,” says Kristan. “Almost everyone we talk to already knows about the Foundation, has some understanding of the governance structure, and what we can offer as part of the Foundation. This makes it much easier to engage people than simply referring them to a GitHub repository with nothing around it.”

“The ability to use Eclipse Hono, hawkBit, and Che has been very important. The consistent approach to policies and regulations across Eclipse projects makes the entire development process much faster and easier.” – Johannes Kristan

As an automotive project, the Eclipse Foundation governance structure was a major attraction for the APPSTACLE research team. “Good governance is particularly important in the automotive industry as we need to ensure we’re doing everything in a legally sound way and can provide evidence of that,” says Kristan.

With access to the broader Eclipse Foundation ecosystem, the Kuksa team has been able to incorporate open source technology advances from several other Eclipse projects. 

“One of our main goals is to not reinvent the wheel, so the ability to use Eclipse Hono, hawkBit, and Che has been very important,” he says. “The consistent approach to policies and regulations across Eclipse projects makes the entire development process much faster and easier.”

Kristan concludes by noting that Kuksa is an excellent proof point that a collaborative, transparent, and vendor-neutral approach works in the automotive industry. 

“In the software industry, it’s common for different companies to collaborate on open source projects. But, this concept is very new in the automotive industry. Eclipse Kuksa shows it’s possible for vehicle manufacturers, their suppliers, and partners to work together on open technologies and standards. It’s a great example for others.” 

For more information about Eclipse Kuksa, visit [eclipse.org/kuksa/](https://www.eclipse.org/kuksa/).