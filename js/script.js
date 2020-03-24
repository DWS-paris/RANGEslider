document.addEventListener('DOMContentLoaded', () => {

    /* 
    Declarations
    */
    //

    /* 
    Functions
    */
        const getFeelingValue = (titleTag, title, listItem, emotionRange) => {
            // Set title
            titleTag.textContent = title;

            // Loop on list item
            for( let i = 0; i < listItem.length; i++ ){
                // Get item
                const item = listItem[i];

                // Get click event on eeach item
                item.addEventListener('click', () => {
                    // Set feeling
                    feelingActivation(title, listItem, emotionRange, i);
                })
            }
        }

        const feelingActivation = (title, listItem, emotionRange, index) => {
            // Loop on list item to delete class
            for( let i = 0; i < listItem.length; i++ ){
                // Remove class active
                listItem[i].classList.remove('active');
            }

            // Loop on list item to add class
            for( let i = 0; i <= index; i++ ){
                // Remove class active
                listItem[i].classList.add('active');
            }

            // Edit emotion range size
            let rangeSize = (index + 1) * 10;
            emotionRange.style.width = rangeSize + '%';

            // Set emotion range
            localStorage.setItem( title, index );
        }
    //

    /* 
    Start interface
    */
        getFeelingValue(
            document.querySelector('#joy h2'), 
            'joie',
            document.querySelectorAll('#joy li'), 
            document.querySelector('#joy .emotionRange')
        );

        getFeelingValue(
            document.querySelector('#entetrainment h2'), 
            'amusement',
            document.querySelectorAll('#entetrainment li'), 
            document.querySelector('#entetrainment .emotionRange')
        );
    //
})