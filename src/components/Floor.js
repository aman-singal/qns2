import React from 'react'
import FloorPlan from './FloorPlan'


function Floor() {


    // Suppose We fetched this data from API
    const rawData=[
        {
            floor: 11,
            data: [{
                type: '2bhk',
                status: 'sold',
                master: true
            },
            {
                type: '3bhk',
                status: 'available',
                master: true
            },
            {
                type: '3bhk',
                status: 'sold',
                master: true
            },
            {
                type: '2bhk',
                status: 'available',
                master: true
            },
            {
                type: '3bhk',
                status: 'sold',
                master: true
            },
            {
                type: '2bhk',
                status: 'available',
                master: true
            },
            {
                type: '3bhk',
                status: 'available',
                master: true
            },
            {
                type: '3bhk',
                status: 'available',
                master: true
            },
            {
                type: '3bhk',
                status: 'available',
                master: true
            },
            {
                type: '3bhk',
                status: 'available',
                master: true
            },
            {
                type: '3bhk',
                status: 'available',
                master: true
            },
            {
                type: '3bhk',
                status: 'available',
                master: true
            },
            {
                type: '3bhk',
                status: 'available',
                master: true
            },
            {
                type: '3bhk',
                status: 'available',
                master: true
            },
            {
                type: '3bhk',
                status: 'available',
                master: true
            },
            {
                type: '3bhk',
                status: 'available',
                master: true
            },
            {
                type: '3bhk',
                status: 'available',
                master: true
            },
            {
                type: '3bhk',
                status: 'available',
                master: true
            }]
            
    },
    {
        floor: 12,
        data: [{
            type: '2bhk',
            status: 'available',
            master: true
        },
        {
            type: '2bhk',
            status: 'available',
            master: true
        },
        {
            type: '3bhk',
            status: 'sold',
            master: true
        },
        {
            type: '2bhk',
            status: 'available',
            master: true
        },
        {
            type: '3bhk',
            status: 'sold',
            master: true
        },
        {
            type: '2bhk',
            status: 'available',
            master: true
        },
        {
            type: '3bhk',
            status: 'sold',
            master: true
        },
        {
            type: '2bhk',
            status: 'available',
            master: true
        },
        {
            type: '3bhk',
            status: 'sold',
            master: true
        },
        {
            type: '2bhk',
            status: 'available',
            master: true
        },
        {
            type: '3bhk',
            status: 'sold',
            master: true
        },
        {
            type: '2bhk',
            status: 'available',
            master: true
        },
        {
            type: '3bhk',
            status: 'sold',
            master: true
        },
        {
            type: '2bhk',
            status: 'available',
            master: true
        },
        {
            type: '3bhk',
            status: 'sold',
            master: true
        },
        {
            type: '2bhk',
            status: 'available',
            master: true
        },
        {
            type: '3bhk',
            status: 'sold',
            master: true
        },
        {
            type: '2bhk',
            status: 'available',
            master: true
        }]
    }
]

    return (
        <div>
            {
               <FloorPlan data={rawData} /> 
            }
        </div>
    )
}

export default Floor