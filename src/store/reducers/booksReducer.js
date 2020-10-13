import * as types from '../actions/actionTypes';

const initialState = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        name: 'Zen and the Art of Motorcycle Maintenance',
        author: 'Robert M. Pirsig',
        description: 'Viết về một hành trình đi khắp nước Mỹ trong mùa hè của một người cha và cậu con trai'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        name: 'Watership Down',
        author: 'Richard Adams',
        description: 'Đồi Thỏ viết về hành trình đi tìm vùng đất mới của một nhóm các chú thỏ khi biết trước nơi chúng đang ở sẽ bị con người và máy móc phá hủy'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        name: 'The Last Lecture',
        author: 'Randy Pausch & Jeffrey Zaslow',
        description: 'Giáo sư khoa học máy tính tại Đại học Carnegie Mellon- Mỹ, trở nên nổi tiếng sau khi đưa ra một bài giảng lạc quan mang tên "Bài giảng cuối'
    },
];

const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_BOOKS:
            return [...state];
        
        case types.DELETE_BOOK: 
            state = state.filter(book => book.id !== action.id);
            return [...state];
        
        case types.ADD_BOOK: 
            const newData = [...state];
            newData.push(action.newBook);
            return [...newData];

        case types.EDIT_BOOK:
            const index = state.findIndex(ele => ele.id == action.editBook.id);
            const newState = [...state];
            newState[index] = {
                ...newState[index],
                name: action.editBook.name,
                author: action.editBook.author,
                description: action.editBook.description
            };
            return [...newState];

        default:
            return state;
    }
}

export default booksReducer;