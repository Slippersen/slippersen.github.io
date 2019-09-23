(function() {

    // JSON-LD
    var structuredData = {
        schema: {
            "@context": "https://schema.org",
            "@type": "Person",
            "image": "/img/ejs.jpg",
            "jobTitle": "Software Engineer",
            "name": "Erik J. Sandal",
            "alternateName": "Erik Johan Sandal",
            "url": "https://sandal.cloud/",
            "sameAs": [
                "https://no.linkedin.com/in/erikjsandal/", 
                "https://github.com/Slippersen/"
            ]
        },
        init: function () {
            var scriptEl = document.createElement('script');
            scriptEl.type = 'application/ld+json';
            scriptEl.innerHTML = JSON.stringify(structuredData.schema);
            document.body.appendChild(scriptEl);
        }
    }
    structuredData.init();

}());
