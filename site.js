(function() {

    // JSON-LD
    var structuredData = {
        schema: {
            "@context": "http://schema.org",
            "@type": "Person",
            "image": "/img/ejs.jpg",
            "jobTitle": "Software Engineer",
            "name": "Erik J. Sandal",
            "birthDate": "1992.01.20",
            "url": "https://sandal.cloud",
            "sameAs": [
                "https://no.linkedin.com/in/erikjsandal/", 
                "https://github.com/Slippersen/"
            ]
        },
        init: function () {
            var scriptEl = document.createElement('script');
            scriptEl.type = 'application/ld+json';
            scriptEl.innerHTML = JSON.stringify(structuredData);
            document.body.appendChild(scriptEl);
        }
    }
    structuredData.init();

}());
