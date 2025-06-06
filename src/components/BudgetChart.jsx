import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import '../css/budgetChart.css'
import { useTheme } from '../contexts/ThemeContext'

function BudgetChart() {
    const chartRef = useRef(null)
    const chartInstanceRef = useRef(null)
    const { darkMode } = useTheme()

    useEffect(() => {
        /**
         * Inicializa y configura el gráfico de presupuesto
         * Utiliza ECharts para crear un gráfico de radar que compara
         * el presupuesto asignado con el gasto real
         */
        if (chartRef.current) {
            chartInstanceRef.current = echarts.init(chartRef.current)
            
            const option = {
                title: {
                    text: '',
                    textStyle: {
                        fontSize: 16,
                        fontWeight: 500,
                        color: darkMode ? '#e2e8f0' : '#012970'
                    },
                    left: '50%',
                    top: '45%',
                    textAlign: 'center',
                    textVerticalAlign: 'middle'
                },
                tooltip: {
                    trigger: 'axis',
                    backgroundColor: darkMode ? '#242b38' : '#ffffff',
                    borderColor: darkMode ? '#374151' : '#ebeef4',
                    textStyle: {
                        color: darkMode ? '#e2e8f0' : '#012970'
                    }
                },
                legend: {
                    data: ['Assigned Budget', 'Actual Spending'],
                    bottom: 0,
                    textStyle: {
                        color: darkMode ? '#e2e8f0' : '#012970'
                    }
                },
                radar: {
                    shape: 'circle',
                    center: ['50%', '45%'],
                    radius: '70%',
                    splitNumber: 5,
                    axisNameGap: 15,
                    axisName: {
                        color: darkMode ? '#e2e8f0' : '#012970',
                        fontSize: 13,
                        fontWeight: 500,
                        formatter: function(value) {
                            const labels = {
                                'Information Technology': 'IT',
                                'Customer Support': 'Support',
                                'Administration': 'Admin',
                                'Development': 'Dev',
                                'Marketing': 'Marketing',
                                'Sales': 'Sales'
                            }
                            return labels[value] || value
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: darkMode ? '#374151' : '#e0e6f1'
                        }
                    },
                    splitArea: {
                        show: true,
                        areaStyle: {
                            color: darkMode ? 
                                ['#1e293b', '#242b38'] :
                                ['#fff', '#f6f6fe']
                        }
                    },
                    axisLabel: {
                        show: false
                    },
                    indicator: [
                        { name: 'Sales', max: 100 },
                        { name: 'Administration', max: 100 },
                        { name: 'Information Technology', max: 100 },
                        { name: 'Customer Support', max: 100 },
                        { name: 'Development', max: 100 },
                        { name: 'Marketing', max: 100 }
                    ]
                },
                series: [{
                    name: 'Budget vs Spending',
                    type: 'radar',
                    data: [
                        {
                            value: [65, 45, 78, 85, 92, 68],
                            name: 'Assigned Budget',
                            itemStyle: {
                                color: darkMode ? '#93c5fd' : '#4154f1'
                            },
                            areaStyle: {
                                color: darkMode ? 
                                    'rgba(147, 197, 253, 0.2)' :
                                    'rgba(65, 84, 241, 0.2)'
                            }
                        },
                        {
                            value: [72, 38, 85, 76, 88, 75],
                            name: 'Actual Spending',
                            itemStyle: {
                                color: darkMode ? '#bfdbfe' : '#2eca6a'
                            },
                            areaStyle: {
                                color: darkMode ?
                                    'rgba(191, 219, 254, 0.2)' :
                                    'rgba(46, 202, 106, 0.2)'
                            }
                        }
                    ]
                }]
            }

            chartInstanceRef.current.setOption(option)

            // Eventos para interactividad del gráfico
            chartInstanceRef.current.on('mouseover', (params) => {
                if (params.componentType === 'radar') {
                    const indicatorIndex = params.data.value.indexOf(params.data.value[params.dataIndex])
                    const indicatorName = option.radar.indicator[indicatorIndex].name
                    
                    chartInstanceRef.current.setOption({
                        title: {
                            text: indicatorName
                        }
                    })
                }
            })

            // Limpiar el texto central cuando el mouse sale del gráfico
            chartInstanceRef.current.on('globalout', () => {
                chartInstanceRef.current.setOption({
                    title: {
                        text: ''
                    }
                })
            })
        }

        // Manejador de redimensionamiento
        const handleResize = () => {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.resize()
            }
        }

        window.addEventListener('resize', handleResize)

        // Limpieza al desmontar el componente
        return () => {
            window.removeEventListener('resize', handleResize)
            if (chartInstanceRef.current) {
                chartInstanceRef.current.dispose()
            }
        }
    }, [darkMode])

    return (
        <div 
            ref={chartRef} 
            style={{
                minHeight: '400px',
                width: '100%',
                backgroundColor: 'var(--chart-bg)',
                borderRadius: '5px',
                padding: '20px'
            }} 
            className='chart'
        />
    )
}

export default BudgetChart
