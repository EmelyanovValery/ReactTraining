import React, {ChangeEvent, useCallback, useMemo, useRef, useState} from 'react';
import {ComponentStory, ComponentMeta, Story} from '@storybook/react';
import Select, {optionType} from "../../components/Select/Select";
import {number} from "prop-types";

export default {
    title: 'UseMemo demo',
    //component: Button,
}

export const Example1: ComponentStory<any> = (args) => {
    const [a, setA] = useState(5)
    const [b, setB] = useState(5)
    let resultA = 1
    let resultB = 1
    resultA = useMemo(() => {
        let tempA = 1
        for (let i = 1; i <= a; i++) {
            let y = 0
            while (y < 100000000) {
                y++;
            }
            tempA = tempA * i;
        }
        return tempA
    }, [a])

    for (let j = 1; j <= b; j++) {
        resultB = resultB * j;
    }


    return <div>
        <input type="text" value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input type="text" value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
        <hr/>
        <div>result A:{resultA}</div>
        <div>result B:{resultB}</div>
    </div>
}
Example1.args = {}


const UserWithOutMemo = (props: { name: string[] }) => {
    console.log("users")
    return <div>{props.name.map((el, index) => <div key={index}>{el}</div>)}</div>
}

const Users = React.memo(UserWithOutMemo)

export const Example2: ComponentStory<any> = (args) => {
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState(["Valya", "Bob", "Sasha"])
    let tempUsers = useMemo(() => {
        return users.filter(el => el.toLowerCase().indexOf("a") > -1)
    }, [users])
    return <>
        <button onClick={() => setCount(count + 1)}>+</button>
        {count}
        <Users name={tempUsers}/>

    </>
};
Example1.args = {}

type ItemsType = optionType & {
    populationSize: number
    country: string
}
const SelectMemo = React.memo(Select)
const Template: ComponentStory<typeof Select> = (args) => {
    console.log("render memo story")
    const [count, setCount] = useState(0)
    const [defaultValue1, setDefaultValue1] = useState(1)
    // const [defaultValue2, setDefaultValue2] = useState(1)
    // const [defaultValue3, setDefaultValue3] = useState(1)
    const onClickOption = (optionIndex: number, idFilter: number) => {
        switch (idFilter) {
            case 1: {
                setDefaultValue1(optionIndex)
                break
            }
            // case 2: {
            //     setDefaultValue2(optionIndex)
            //     break
            // }
            // case 3: {
            //     setDefaultValue3(optionIndex)
            //     break
            // }
            default:
                break
        }
    }
    const onClickOptionMemo=useCallback(onClickOption,[])
    const items: ItemsType[] = [
        {title: "Ufa", index: 0, populationSize: 1000000, country: "Russia"},
        {title: "Moscow", index: 1, populationSize: 16000000, country: "Russia"},
        {title: "Kazan", index: 2, populationSize: 1500000, country: "Russia"},
        {title: "Minsk", index: 3, populationSize: 5000000, country: "Belarus"},
        {title: "Kiev", index: 4, populationSize: 6000000, country: "Ukraine"},
        {title: "Dnepr", index: 5, populationSize: 1000000, country: "Ukraine"},
        {title: "Brest", index: 6, populationSize: 500000, country: "Belarus"},]
    const filterCountry = useMemo(() => {
            return items.filter(el => el.country === "Belarus").map((el, index) => ({title: el.title, index: index}))
        }
        , [items])
    // const filterPopulation = useMemo(() => {
    //     return items.filter(el => el.populationSize > 3000000).map((el, index) => ({title: el.title, index: index}))
    // }, [defaultValue2])
    // const allItems = useMemo(() => {
    //     return items.map((el, index) => ({title: el.title, index: index}))
    // }
    // , [defaultValue3])

return <div>
    <button onClick={() => {
        console.log("Render count")
        setCount(count + 1)
    }}>+
    </button>
    {count}
    <h1><SelectMemo defaultSelectIndex={defaultValue1} {...args} onClickOption={(option) => onClickOption(option, 1)}
                    options={filterCountry}/></h1>
    {/*<h1><SelectMemo defaultSelectIndex={defaultValue2} {...args} onClickOption={(option) => onClickOption(option, 2)}*/}
    {/*                options={filterPopulation}/></h1>*/}
    {/*<h1><SelectMemo defaultSelectIndex={defaultValue3} {...args} onClickOption={(option) => onClickOption(option, 3)}*/}
    {/*                options={allItems}/></h1>*/}
</div>
}
;

export const WithDefaultIndex = Template.bind({});

WithDefaultIndex.args = {};