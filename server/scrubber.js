module.exports = {
    scrubber: (pet) => {
        let scrubbed = pet.petfinder.pet
        scrubbed.age = scrubbed.age.$t
        scrubbed.animal = scrubbed.animal.$t
        scrubbed.breeds.breed = scrubbed.breeds.breed.$t
        scrubbed.description = scrubbed.description.$t
        scrubbed.id = scrubbed.id.$t
        scrubbed.lastUpdate = scrubbed.lastUpdate.$t
        scrubbed.mix = scrubbed.mix.$t
        scrubbed.name = scrubbed.name.$t
        scrubbed.sex = scrubbed.sex.$t
        scrubbed.size = scrubbed.size.$t
        scrubbed.shelterId = scrubbed.shelterId.$t
        scrubbed.shelterPetId = scrubbed.shelterPetId.$t

        delete scrubbed.options
        delete scrubbed.status

        if (scrubbed.media.hasOwnProperty('photos')) {
            scrubbed.media.photos.photo.forEach((media) => {
                media.img = media.$t
                delete media.$t
            })
        }


        for (var key in scrubbed.contact) {
            if (scrubbed.contact[key].hasOwnProperty("$t")) {
                scrubbed.contact[key] = scrubbed.contact[key].$t
            }
        }
    }
}