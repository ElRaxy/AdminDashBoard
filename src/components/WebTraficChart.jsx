import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import { useTheme } from '../contexts/ThemeContext'

function WebTraficChart() {
    const chartRef = useRef(null)
    const chartInstanceRef = useRef(null)
    const { darkMode } = useTheme()

    useEffect(() => {
        /**
         * Inicializa y configura el gráfico de tráfico web
         * Utiliza ECharts para crear un gráfico circular que muestra
         * las diferentes fuentes de tráfico del sitio
         */
        if (chartRef.current) {
            chartInstanceRef.current = echarts.init(chartRef.current)
            
            const option = {
                backgroundColor: 'transparent',
                tooltip: {
                    trigger: 'item',
                    backgroundColor: darkMode ? '#1e293b' : '#ffffff',
                    borderColor: darkMode ? '#334155' : '#ebeef4',
                    textStyle: {
                        color: darkMode ? '#e2e8f0' : '#012970'
                    }
                },
                legend: {
                    top: 0,
                    left: 'center',
                    textStyle: {
                        color: darkMode ? '#e2e8f0' : '#012970'
                    }
                },
                series: [
                    {
                        name: 'Access Source',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center',
                            color: darkMode ? '#e2e8f0' : '#012970'
                        },
                        emphasis: {
                            show: false,
                            position: 'center',
                        },
                        labelLine: {
                            show: false,
                        },
                        data: [
                            { 
                                value: 1048, 
                                name: 'Search Engine',
                                itemStyle: {
                                    color: darkMode ? '#93c5fd' : '#4154f1'
                                }
                            },
                            { 
                                value: 735, 
                                name: 'Direct',
                                itemStyle: {
                                    color: darkMode ? '#7dd3fc' : '#2eca6a'
                                }
                            },
                            { 
                                value: 580, 
                                name: 'Email',
                                itemStyle: {
                                    color: darkMode ? '#38bdf8' : '#ff771d'
                                }
                            },
                            { 
                                value: 484, 
                                name: 'Union Ads',
                                itemStyle: {
                                    color: darkMode ? '#0ea5e9' : '#dc2626'
                                }
                            },
                            { 
                                value: 300, 
                                name: 'Video Ads',
                                itemStyle: {
                                    color: darkMode ? '#0284c7' : '#7c3aed'
                                }
                            }
                        ],
                    },
                ],
            }

            chartInstanceRef.current.setOption(option)
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
                backgroundColor: 'transparent',
                borderRadius: '8px',
                padding: '20px'
            }}
            className='echart'
        />
    )
}

export default WebTraficChart
