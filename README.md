# Project Overview

## Project

Link to completed project [here](https://emestiza.github.io).

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Wireframes / Priority Matrix / Timeline | Complete
|Day 2| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 4| MVP & Bug Fixes | Complete
|Day 5| Final Touches | Complete
|Day 6| Present | Complete


## Project Description

The goal of this project is to build a portfolio site that highlights the skills and projects I'll be working on in GA. I will use HTML and CSS to style and format the site. I will use JavaScript to tackle interactions such as a JSON API and a responsive hamburger menu. 


## Google Sheet

Link to Google sheet with projects [here](https://docs.google.com/spreadsheets/d/1A-BPvETOegMvze6amsGrhtmqROJjC3dzMqY2djCe__Q/edit#gid=0).


## Wireframes

Below are links to wireframes that show the site blueprint for three different display sizes. 

- [Mobile](https://res.cloudinary.com/dssciwyew/image/upload/v1594431798/Mobile.png)
- [Tablet](https://res.cloudinary.com/dssciwyew/image/upload/v1594431799/Tablet.png)
- [Desktop](https://res.cloudinary.com/dssciwyew/image/upload/v1594431799/Desktop.png)


## Time/Priority Matrix 

Here is a full list of features that have been [prioritized](https://res.cloudinary.com/dssciwyew/image/upload/v1594484749/Time%20Matrix.png) based on the `Time and Priority` Matix.   

Based on the matrix data it will take 40 hours to complete the project.


### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP. The MVP list includes functionality that will be implemented upon project completion.  

#### MVP

- Create and setup HTML, CSS, and JavaScript files
- Create CSS GRID containers to create a multi-column layout
- Create CSS flex-box containers
- Add images, icons, and content
- Create responsive design
- Create hamburger menu icon
- Pull in projects via API call from google sheet
- Deploy online via Github Pages

#### PostMVP 

- Add additional project links
- Add social media links


## Functional Components

Based on the initial logic defined in the previous sections, the logic is broken down further into functional components.

#### MVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Sections with Grid| H | 2hrs | 2hrs | 2hrs|
| Sections with Flex-box| H | 2hrs | 2hrs | 2hrs|
| Desktop Navigation | H | 1hr | 1hr | 1hr|
| Tablet Navigation | H | 1hr | 1hr | 1hr|
| Mobile Navigation | H | 1hr | 1hr | 1hr|
| Desktop Responsive Design | H | 1hr | 1hr | 1hr|
| Tablet Responsive Design | H | 1hr | 1hr | 1hr|
| Mobile Responsive Design | H | 1hr | 1hr | 1hr|
| Hamburger Icon | H | 2hrs | 2hrs | 4hrs|
| Data API | H | 2hrs| 2hrs | 2hrs |
| Adding Google Form | H | 2hrs| 2hrs | 2hrs |
| Debugging & Testing | M | 8hrs| 8hrs | 10hrs |
| Final Touches | M | 8hrs| 8hrs | 10hrs |
| Deployment | M | 8hrs| 8hrs | 2hrs |
| Total |  | 40hrs| 40hrs | 40hrs |

#### PostMVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Other Sections| M | 2hr | 2hrs | 1hr|
| Social Media Icons | L | 2hr | 2hrs | 2hrs|
| Total |  | 4hrs| 4hrs | 3hrs |

## Additional Libraries
 The jQuery JavaScript library and JSON were used for the data API in the project. The jQuery JavaScript library was also used for the hamburger icon toggle. 

## Code Snippet

The code snippet below is used for the API functionality. The code shows how data in JSON format is extracted externally and added to this site. 

```
// JSON API
const url = 'https://spreadsheets.google.com/feeds/list/1A-BPvETOegMvze6amsGrhtmqROJjC3dzMqY2djCe__Q/od6/public/values?alt=json'

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data.feed.entry)
        const projects = data.feed.entry.map(entry => {
            return {
                title: entry.gsx$title.$t,
                image: entry.gsx$image.$t,
                description: entry.gsx$description.$t,
                url: entry.gsx$url.$t
             }
        })
        app(projects)
    })

const app = (data) => {
    console.log(data)

    const createProjectElement = (project) => {
        const $div = $('<div>').addClass("project")
        $div.append($('<h3>').text(project.title))
        $div.append($('<img>').attr('src', project.image))
        $div.append($('<p>').addClass("description").text(project.description))
        $div.append($('<a>').attr('href', project.url).text("Project Link"))
        return $div
    }
    
    data.forEach(project => {
        const $projectDiv = createProjectElement(project)
        $('.main1').append($projectDiv)  
    })
}
```

## Issues and Resolutions
**ERROR**: Hamburger icon did not toggle                                
**RESOLUTION**: Used jQuery function and toggle class

