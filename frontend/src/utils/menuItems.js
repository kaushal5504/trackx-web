import {advise, books, dashboard, expenses, news, res, transactions, trend} from '../utils/Icons'

export const menuItems = [
    {
        id: 1,
        title: 'Dashboard',
        icon: dashboard,
        link: '/dashboard'
    },
    {
        id: 2,
        title: "View Transactions",
        icon: transactions,
        link: "/dashboard",
    },
    {
        id: 3,
        title: "Incomes",
        icon: trend,
        link: "/dashboard",
    },
    {
        id: 4,
        title: "Expenses",
        icon: expenses,
        link: "/dashboard",
    },
    {
        id:5,
        title:"News",
        icon:news,
        link:"/dashboard"
    },
    {
        id:6,
        title:"Resources",
        icon:res,
        link:"/resources"
    },
    {
        id:7,
        title:'Advisory',
        icon:advise,
        link:"/advisory"
    }
]