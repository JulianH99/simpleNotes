var shortenTextMixin = {
    methods:{
        shorten(text){
            if(text.length > 30){
                return text.substr(0, 27) + "..."
            }
            else
                return text
        }
    }
}

export default shortenTextMixin
