
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
    console.log('app is running')
    console.log(data)

    const createProjectElement = (project) => {
        const $div = $('<div>').addClass("project")
        $div.append($('<h2>').text(project.title))
        $div.append($('<img>').attr('src', project.image))
        $div.append($('<p>').addClass("description").text(project.description))
        $div.append($('<a>').attr('href', project.url).text("Project Link"))
        return $div
    }
    
    data.forEach(project => {
        const $projectDiv = createProjectElement(project)
        $('.item-4').append($projectDiv)  
    })
}