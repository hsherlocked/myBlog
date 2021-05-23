import { atom, selector } from 'recoil'
/* eslint-disable */
export const userListActionAtom = atom({
    key: 'userListActionAtomKey',
    default: [{ id: 0, name: 'default', age: 0 }],
})

export const userListSelector = selector({
    key: 'userListSelectorKey',
    get: ({ get }) => {
        const allList = get(userListActionAtom)
        return allList
    },
    set: ({ set, get }, newValue) => {
        const { action, payload } = newValue
        const oldList = get(userListActionAtom)
        switch (action) {
            case 'ADD':
                set(userListActionAtom, [...oldList, payload])
                break
            case 'DEL':
                const newList = [...oldList].filter(item => {
                    return item.id !== payload.id
                })
                set(userListActionAtom, [...newList])
                break
            case 'MOD':
                const modifiedList = [...oldList].map(item => {
                    if (item.id !== payload.id) {
                        return item
                    } else {
                        return payload
                    }
                })
                set(userListActionAtom, [...modifiedList])
                break
            default:
        }
    },
})

export const userListCountSelector = selector({
    key: 'userListCountSelectorKey',
    get: ({ get }) => {
        const list = get(userListActionAtom)
        return list.length
    },
})
