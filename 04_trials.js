// In this file you can specify the trial data for your experiment

/*
const trial_info = {
    forced_choice: [
        {
            question: "What's on the bread?",
            picture: "images/question_mark_02.png",
            option1: 'jam',
            option2: 'ham',
            correct: 'jam'
        },
        {
            question: "What's the weather like?",
            picture: "images/weather.jpg",
            option1: "shiny",
            option2: "rainbow",
            correct: "shiny"
        }
    ]
};


const trial_info = {
    key_press: [
        {
            //question: "What's the weather like? like?",
            picture: "images/mental_rotation_images/1_50_different.jpg",
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: 'different',
            pic_number: "1",
            rotation: "50"
        },
        {
            //question: "What's on the bread?",
            picture: 'images/mental_rotation_images/1_50_same.jpg',
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: 'same',
            pic_number: "1",
            rotation: "50"
        },
        {
            //question: "What's on the bread?",
            picture: 'images/mental_rotation_images/1_150_different.jpg',
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: 'different',
            pic_number: "1",
            rotation: "150"
        },
        {
            //question: "What's on the bread?",
            picture: 'images/mental_rotation_images/1_150_same.jpg',
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: 'same',
            pic_number: "1",
            rotation: "150"
        },
        {
            //question: "What's on the bread?",
            picture: 'images/mental_rotation_images/2_50_different.jpg',
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: 'different',
            pic_number: "2",
            rotation: "50"
        }
               
    ]
};
*/



const practice_trials = {
    key_press: [
        {
            picture: "images/practice/13_50_same.jpg",
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            item: 13,
            expected: "same",
            angle: 50,
            //correct: "same",
            //question: "are they the same?"
        },
        {
            picture: "images/practice/13_50_different.jpg",
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            item: 13,
            expected: "different",
            angle: 50,
        },
        {
            picture: "images/practice/13_150_same.jpg",
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            item: 13,
            expected: "same",
            angle: 150,
        },
        {
            picture: "images/practice/13_150_different.jpg",
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            item: 13,
            expected: "different",
            angle: 150,
        },
        {
            picture: "images/practice/14_50_same.jpg",
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            item: 14,
            expected: "same",
            angle: 50,
        },
        {
            picture: "images/practice/14_50_different.jpg",
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            item: 14,
            expected: "different",
            angle: 50,
        },
        {
            picture: "images/practice/14_150_same.jpg",
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            item: 14,
            expected: "same",
            angle: 150
        },
        {
            picture: "images/practice/14_150_different.jpg",
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            item: 14,
            expected: "different",
            angle: 150
        },
        {
            picture: "images/practice/15_50_same.jpg",
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            item: 15,
            expected: "same",
            angle: 50
        },
        {
            picture: "images/practice/15_50_different.jpg",
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            item: 15,
            expected: "different",
            angle: 50
        },
        {
            picture: "images/practice/15_150_same.jpg",
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            item: 15,
            expected: "same",
            angle: 150
        },
        {
            picture: "images/practice/15_150_different.jpg",
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            item: 15,
            expected: "different",
            angle: 150
        },
    ],
};

const main_trials = {
    key_press: [
        {
            picture: "images/main/1_50_same.jpg",
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            item: 1,
            expected: "same",
            angle: 50,

        },
        {
            picture: "images/main/1_50_different.jpg",
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            item: 1,
            expected: "different",
            angle: 50,

        },
        {
            picture: "images/main/1_150_same.jpg",
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            item: 1,
            expected: "same",
            angle: 150,
        },
        {
            picture: "images/main/1_150_different.jpg",
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            item: 1,
            expected: "different",
            angle: 150,
        },
        {
            picture: "images/main/2_50_same.jpg",
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            item: 2,
            expected: "same",
            angle: 50,
        },
        {
            picture: "images/main/2_50_different.jpg",
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            item: 2,
            expected: "different",
            angle: 50,
        },
        {
            picture: "images/main/2_150_same.jpg",
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            item: 2,
            expected: "same",
            angle: 150,
        },
        {
            picture: "images/main/2_150_different.jpg",
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            item: 2,
            expected: "different",
            angle: 150,
        },

        {
            picture: "images/main/3_50_same.jpg",
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            item: 3,
            expected: "same",
            angle: 50,
        },
        {
            picture: "images/main/3_50_different.jpg",
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            item: 3,
            expected: "different",
            angle: 50,
        },
        {
            picture: "images/main/3_150_same.jpg",
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            item: 3,
            expected: "same",
            angle: 150,
        },
        {
            picture: "images/main/3_150_different.jpg",
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            item: 3,
            expected: "different",
            angle: 150,
        },

        {
            picture: "images/main/4_50_same.jpg",
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            item: 4,
            expected: "same",
            angle: 50,
        },
        {
            picture: "images/main/4_50_different.jpg",
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            item: 4,
            expected: "different",
            angle: 50,
        },
        {
            picture: "images/main/4_150_same.jpg",
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            item: 4,
            expected: "same",
            angle: 150,
        },
        {
            picture: "images/main/4_150_different.jpg",
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            item: 4,
            expected: "different",
            angle: 150,
        },

        {
            picture: "images/main/5_50_same.jpg",
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            item: 5,
            expected: "same",
            angle: 50,
        },
        {
            picture: "images/main/5_50_different.jpg",
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            item: 5,
            expected: "different",
            angle: 50,
        },
        {
            picture: "images/main/5_150_same.jpg",
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            item: 5,
            expected: "same",
            angle: 150,
        },
        {
            picture: "images/main/5_150_different.jpg",
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            item: 5,
            expected: "different",
            angle: 150,
        },
        {
            picture: "images/main/6_50_same.jpg",
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            item: 6,
            expected: "same",
            angle: 50,
        },
        {
            picture: "images/main/6_50_different.jpg",
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            item: 6,
            expected: "different",
            angle: 50,
        },
        {
            picture: "images/main/6_150_same.jpg",
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            item: 6,
            expected: "same",
            angle: 150,
        },
        {
            picture: "images/main/6_150_different.jpg",
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            item: 6,
            expected: "different",
            angle: 150,
        },

        {
            picture: "images/main/7_50_same.jpg",
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            item: 7,
            expected: "same",
            angle: 50,
        },
        {
            picture: "images/main/7_50_different.jpg",
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            item: 7,
            expected: "different",
            angle: 50,
        },
        {
            picture: "images/main/7_150_same.jpg",
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            item: 7,
            expected: "same",
            angle: 150,
        },
        {
            picture: "images/main/7_150_different.jpg",
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            item: 7,
            expected: "different",
            angle: 150,
        },

        {
            picture: "images/main/8_50_same.jpg",
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            item: 8,
            expected: "same",
            angle: 50,
        },
        {
            picture: "images/main/8_50_different.jpg",
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            item: 8,
            expected: "different",
            angle: 50,
        },
        {
            picture: "images/main/8_150_same.jpg",
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            item: 8,
            expected: "same",
            angle: 150,
        },
        {
            picture: "images/main/8_150_different.jpg",
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            item: 8,
            expected: "different",
            angle: 150,
        },

        {
            picture: "images/main/9_50_same.jpg",
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            item: 9,
            expected: "same",
            angle: 50,
        },
        {
            picture: "images/main/9_50_different.jpg",
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            item: 9,
            expected: "different",
            angle: 50,
        },
        {
            picture: "images/main/9_150_same.jpg",
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            item: 9,
            expected: "same",
            angle: 150,
        },
        {
            picture: "images/main/9_150_different.jpg",
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            item: 9,
            expected: "different",
            angle: 150,
        },
        {
            picture: "images/main/10_50_same.jpg",
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            item: 10,
            expected: "same",
            angle: 50,
        },
        {
            picture: "images/main/10_50_different.jpg",
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            item: 10,
            expected: "different",
            angle: 50,
        },
        {
            picture: "images/main/10_150_same.jpg",
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            item: 10,
            expected: "same",
            angle: 150,
        },
        {
            picture: "images/main/10_150_different.jpg",
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            item: 10,
            expected: "different",
            angle: 150,
        },
        {
            picture: "images/main/11_50_same.jpg",
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            item: 11,
            expected: "same",
            angle: 50,
        },
        {
            picture: "images/main/11_50_different.jpg",
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            item: 11,
            expected: "different",
            angle: 50,
        },
        {
            picture: "images/main/11_150_same.jpg",
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            item: 11,
            expected: "same",
            angle: 150,
        },
        {
            picture: "images/main/11_150_different.jpg",
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            item: 11,
            expected: "different",
            angle: 150,
        },
        {
            picture: "images/main/12_50_same.jpg",
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            item: 12,
            expected: "same",
            angle: 50,
        },
        {
            picture: "images/main/12_50_different.jpg",
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            item: 12,
            expected: "different",
            angle: 50,
        },
        {
            picture: "images/main/12_150_same.jpg",
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            item: 12,
            expected: "same",
            angle: 150,
        },
        {
            picture: "images/main/12_150_different.jpg",
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            item: 12,
            expected: "different",
            angle: 150,
        },
    ],
};
