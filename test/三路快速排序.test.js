import sort from "../三路快速排序"
test('sort([0,0,3,2,1],0,4)', () => {
    expect(sort([0,0,3,2,1],0,4)).toEqual([0,0,1,2,3]);
})