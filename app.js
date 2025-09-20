// Application data and state management
class HealthDashboard {
    constructor() {
        this.data = {
            currentHealthMetrics: {
                heartRate: 78,
                bloodPressure: { systolic: 118, diastolic: 76 },
                oxygenSaturation: 98,
                stressLevel: "Low",
                sleepQuality: 85,
                healthStatus: "Excellent"
            },
            historicalData: {
                heartRate: [
                    { date: "2025-09-14", value: 72, time: "08:00" },
                    { date: "2025-09-14", value: 85, time: "12:00" },
                    { date: "2025-09-14", value: 79, time: "16:00" },
                    { date: "2025-09-14", value: 68, time: "20:00" },
                    { date: "2025-09-15", value: 74, time: "08:00" },
                    { date: "2025-09-15", value: 88, time: "12:00" },
                    { date: "2025-09-15", value: 82, time: "16:00" },
                    { date: "2025-09-15", value: 71, time: "20:00" },
                    { date: "2025-09-16", value: 76, time: "08:00" },
                    { date: "2025-09-16", value: 91, time: "12:00" },
                    { date: "2025-09-16", value: 78, time: "16:00" },
                    { date: "2025-09-16", value: 69, time: "20:00" },
                    { date: "2025-09-17", value: 73, time: "08:00" },
                    { date: "2025-09-17", value: 87, time: "12:00" },
                    { date: "2025-09-17", value: 80, time: "16:00" },
                    { date: "2025-09-17", value: 72, time: "20:00" },
                    { date: "2025-09-18", value: 75, time: "08:00" },
                    { date: "2025-09-18", value: 89, time: "12:00" },
                    { date: "2025-09-18", value: 83, time: "16:00" },
                    { date: "2025-09-18", value: 70, time: "20:00" },
                    { date: "2025-09-19", value: 77, time: "08:00" },
                    { date: "2025-09-19", value: 92, time: "12:00" },
                    { date: "2025-09-19", value: 81, time: "16:00" },
                    { date: "2025-09-19", value: 73, time: "20:00" },
                    { date: "2025-09-20", value: 78, time: "08:00" }
                ],
                sleepData: [
                    { date: "2025-09-14", totalSleep: 7.5, deepSleep: 2.1, lightSleep: 4.2, remSleep: 1.2, quality: 82 },
                    { date: "2025-09-15", totalSleep: 6.8, deepSleep: 1.9, lightSleep: 3.8, remSleep: 1.1, quality: 75 },
                    { date: "2025-09-16", totalSleep: 8.1, deepSleep: 2.4, lightSleep: 4.5, remSleep: 1.2, quality: 88 },
                    { date: "2025-09-17", totalSleep: 7.2, deepSleep: 2.0, lightSleep: 4.0, remSleep: 1.2, quality: 80 },
                    { date: "2025-09-18", totalSleep: 6.5, deepSleep: 1.8, lightSleep: 3.6, remSleep: 1.1, quality: 72 },
                    { date: "2025-09-19", totalSleep: 7.8, deepSleep: 2.2, lightSleep: 4.3, remSleep: 1.3, quality: 85 },
                    { date: "2025-09-20", totalSleep: 7.6, deepSleep: 2.1, lightSleep: 4.1, remSleep: 1.4, quality: 83 }
                ],
                stressLevels: [
                    { date: "2025-09-14", level: 2, events: ["Morning exam", "Assignment due"] },
                    { date: "2025-09-15", level: 1, events: ["Regular classes"] },
                    { date: "2025-09-16", level: 3, events: ["Project presentation", "Job interview"] },
                    { date: "2025-09-17", level: 2, events: ["Group meeting", "Lab work"] },
                    { date: "2025-09-18", level: 1, events: ["Light study day"] },
                    { date: "2025-09-19", level: 2, events: ["Midterm preparation"] },
                    { date: "2025-09-20", level: 1, events: ["Weekend relaxation"] }
                ]
            },
            academicData: {
                currentGPA: 3.67,
                studyHours: { today: 4.5, thisWeek: 28, recommended: 35 },
                assignments: { completed: 12, pending: 3, overdue: 1 },
                attendance: 94,
                upcomingExams: [
                    { subject: "Data Structures", date: "2025-09-25", difficulty: "High" },
                    { subject: "Statistics", date: "2025-09-28", difficulty: "Medium" },
                    { subject: "Ethics", date: "2025-10-02", difficulty: "Low" }
                ]
            },
            predictions: {
                burnoutRisk: 23,
                academicPerformance: 85,
                healthTrend: "Improving",
                recommendedActions: [
                    "Increase sleep duration by 30 minutes",
                    "Take study breaks every 90 minutes",
                    "Consider stress management techniques",
                    "Maintain current exercise routine"
                ]
            },
            alerts: [
                {
                    id: 1,
                    type: "warning",
                    title: "Sleep Pattern Alert",
                    message: "Your sleep duration has been below recommended levels for 3 consecutive days",
                    timestamp: "2025-09-20T08:30:00Z",
                    priority: "medium",
                    resolved: false
                },
                {
                    id: 2,
                    type: "info",
                    title: "Study Recommendation",
                    message: "Based on your energy patterns, optimal study time is between 9-11 AM",
                    timestamp: "2025-09-20T07:00:00Z",
                    priority: "low",
                    resolved: false
                },
                {
                    id: 3,
                    type: "success",
                    title: "Health Goal Achieved",
                    message: "Congratulations! You've maintained healthy stress levels for 5 days",
                    timestamp: "2025-09-19T18:00:00Z",
                    priority: "low",
                    resolved: true
                }
            ],
            lifestyle: {
                dailySteps: 8247,
                caloriesBurned: 2156,
                waterIntake: 6,
                screenTime: 5.2,
                socialInteractions: 7,
                moodRating: 7
            },
            deviceStatus: [
                { name: "Apple Watch Series 9", status: "connected", battery: 78, lastSync: "2025-09-20T13:30:00Z" },
                { name: "Fitbit Charge 5", status: "connected", battery: 45, lastSync: "2025-09-20T13:25:00Z" },
                { name: "Sleep Tracker", status: "disconnected", battery: null, lastSync: "2025-09-19T23:45:00Z" }
            ],
            goals: {
                sleep: { target: 8, current: 7.2, progress: 90 },
                steps: { target: 10000, current: 8247, progress: 82 },
                study: { target: 6, current: 4.5, progress: 75 },
                stress: { target: 2, current: 1, progress: 100 }
            }
        };

        this.charts = {};
        this.currentView = 'dashboard';
        this.init();
    }

    init() {
        this.initNavigation();
        this.initThemeToggle();
        this.updateDashboardMetrics();
        this.renderAlerts();
        this.renderExams();
        this.renderDevices();
        this.renderGoalsProgress();
        this.renderRecommendations();
        this.initRefreshButton();
        this.startRealTimeUpdates();
        this.initTimeRangeSelector();
        this.initAlertFilters();
    }

    // Utility function to format numbers properly
    formatNumber(value, decimals = 0) {
        return Number(value).toFixed(decimals);
    }

    // Navigation handling
    initNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        const views = document.querySelectorAll('.view');

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetView = link.dataset.view;
                this.switchView(targetView);
                
                // Update active nav link
                navLinks.forEach(nl => nl.classList.remove('active'));
                link.classList.add('active');
            });
        });
    }

    switchView(viewName) {
        const views = document.querySelectorAll('.view');
        const pageTitle = document.getElementById('page-title');
        
        views.forEach(view => view.classList.remove('active'));
        document.getElementById(`${viewName}-view`).classList.add('active');
        
        // Update page title
        const titles = {
            dashboard: 'Health Dashboard',
            analytics: 'Analytics & Trends',
            academic: 'Academic Integration',
            lifestyle: 'Lifestyle Tracking',
            alerts: 'Alerts & Notifications',
            reports: 'Reports & Insights',
            profile: 'Profile & Settings'
        };
        
        pageTitle.textContent = titles[viewName] || 'Dashboard';
        this.currentView = viewName;

        // Initialize charts when switching to analytics view
        if (viewName === 'analytics') {
            setTimeout(() => this.initCharts(), 100);
        }
        
        if (viewName === 'academic') {
            setTimeout(() => this.initCorrelationChart(), 100);
        }
    }

    // Theme toggle functionality
    initThemeToggle() {
        const themeToggle = document.getElementById('theme-toggle');
        const icon = themeToggle.querySelector('i');
        
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-color-scheme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-color-scheme', newTheme);
            icon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        });
    }

    // Update dashboard metrics with real-time data
    updateDashboardMetrics() {
        const metrics = this.data.currentHealthMetrics;
        
        document.getElementById('health-status').textContent = metrics.healthStatus;
        document.getElementById('heart-rate-value').textContent = this.formatNumber(metrics.heartRate, 0);
        document.getElementById('bp-systolic').textContent = this.formatNumber(metrics.bloodPressure.systolic, 0);
        document.getElementById('bp-diastolic').textContent = this.formatNumber(metrics.bloodPressure.diastolic, 0);
        document.getElementById('oxygen-value').textContent = this.formatNumber(metrics.oxygenSaturation, 0);
        document.getElementById('stress-level').textContent = metrics.stressLevel;
        document.getElementById('sleep-quality').textContent = this.formatNumber(metrics.sleepQuality, 0);
        document.getElementById('daily-steps').textContent = Math.round(this.data.lifestyle.dailySteps).toLocaleString();

        // Update heart rate status based on value
        const heartRateStatus = document.getElementById('heart-rate-status');
        const hr = metrics.heartRate;
        if (hr >= 60 && hr <= 100) {
            heartRateStatus.textContent = 'Normal';
            heartRateStatus.style.color = 'var(--color-success)';
        } else if (hr > 100 && hr <= 120) {
            heartRateStatus.textContent = 'Elevated';
            heartRateStatus.style.color = 'var(--color-warning)';
        } else {
            heartRateStatus.textContent = 'Alert';
            heartRateStatus.style.color = 'var(--color-error)';
        }
    }

    // Render alerts in dashboard and alerts view
    renderAlerts() {
        const dashboardAlerts = document.getElementById('dashboard-alerts');
        const alertsList = document.getElementById('alerts-list');
        const unresolvedAlerts = this.data.alerts.filter(alert => !alert.resolved);
        
        // Dashboard alerts preview (last 3 unresolved)
        if (dashboardAlerts) {
            dashboardAlerts.innerHTML = unresolvedAlerts.slice(0, 3).map(alert => `
                <div class="alert-item ${alert.type}">
                    <div class="alert-icon">
                        <i class="fas ${this.getAlertIcon(alert.type)}"></i>
                    </div>
                    <div class="alert-content">
                        <h5>${alert.title}</h5>
                        <p>${alert.message}</p>
                    </div>
                    <div class="alert-time">${this.formatTime(alert.timestamp)}</div>
                </div>
            `).join('');
        }

        // Full alerts list
        if (alertsList) {
            alertsList.innerHTML = this.data.alerts.map(alert => `
                <div class="alert-item-full ${alert.type}">
                    <div class="alert-header">
                        <h4 class="alert-title">${alert.title}</h4>
                        <span class="alert-priority ${alert.priority}">${alert.priority.toUpperCase()}</span>
                    </div>
                    <div class="alert-message">${alert.message}</div>
                    <div class="alert-footer">
                        <span class="alert-timestamp">${this.formatTime(alert.timestamp)}</span>
                        <div class="alert-actions">
                            ${!alert.resolved ? `
                                <button class="btn btn--sm btn--primary" onclick="dashboard.resolveAlert(${alert.id})">Resolve</button>
                                <button class="btn btn--sm btn--outline">Dismiss</button>
                            ` : `<span class="status status--success">Resolved</span>`}
                        </div>
                    </div>
                </div>
            `).join('');
        }
    }

    getAlertIcon(type) {
        const icons = {
            warning: 'fa-exclamation-triangle',
            info: 'fa-info-circle',
            success: 'fa-check-circle',
            error: 'fa-times-circle'
        };
        return icons[type] || 'fa-info-circle';
    }

    formatTime(timestamp) {
        const date = new Date(timestamp);
        const now = new Date();
        const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
        
        if (diffInHours < 1) return 'Just now';
        if (diffInHours < 24) return `${diffInHours}h ago`;
        return `${Math.floor(diffInHours / 24)}d ago`;
    }

    resolveAlert(alertId) {
        const alert = this.data.alerts.find(a => a.id === alertId);
        if (alert) {
            alert.resolved = true;
            this.renderAlerts();
            this.updateAlertBadge();
        }
    }

    updateAlertBadge() {
        const badge = document.querySelector('.alert-badge');
        const unresolvedCount = this.data.alerts.filter(alert => !alert.resolved).length;
        badge.textContent = unresolvedCount;
        badge.style.display = unresolvedCount > 0 ? 'block' : 'none';
    }

    // Render upcoming exams
    renderExams() {
        const examList = document.getElementById('exam-list');
        if (examList) {
            examList.innerHTML = this.data.academicData.upcomingExams.map(exam => `
                <div class="exam-item">
                    <div class="exam-info">
                        <h5>${exam.subject}</h5>
                        <div class="exam-date">${this.formatDate(exam.date)}</div>
                    </div>
                    <span class="exam-difficulty ${exam.difficulty.toLowerCase()}">${exam.difficulty}</span>
                </div>
            `).join('');
        }
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            weekday: 'short', 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
        });
    }

    // Render connected devices
    renderDevices() {
        const devicesList = document.getElementById('devices-list');
        if (devicesList) {
            devicesList.innerHTML = this.data.deviceStatus.map(device => `
                <div class="device-item">
                    <div class="device-info">
                        <h5>${device.name}</h5>
                        <div class="device-status ${device.status}">${device.status}</div>
                    </div>
                    <div class="device-battery">
                        ${device.battery ? `
                            <div class="battery-level">${device.battery}%</div>
                        ` : ''}
                        <div class="last-sync">Last sync: ${this.formatTime(device.lastSync)}</div>
                    </div>
                </div>
            `).join('');
        }
    }

    // Render goals progress
    renderGoalsProgress() {
        const goalsProgress = document.getElementById('goals-progress');
        if (goalsProgress) {
            goalsProgress.innerHTML = Object.entries(this.data.goals).map(([key, goal]) => `
                <div class="goal-item">
                    <div class="goal-name">${key.charAt(0).toUpperCase() + key.slice(1)}</div>
                    <div class="goal-progress" data-progress="${goal.progress}" style="background: conic-gradient(var(--color-primary) ${goal.progress * 3.6}deg, var(--color-secondary) ${goal.progress * 3.6}deg)"></div>
                    <div class="goal-details">${goal.current} / ${goal.target}</div>
                </div>
            `).join('');
        }
    }

    // Render AI recommendations
    renderRecommendations() {
        const recommendationsList = document.getElementById('recommendations-list');
        if (recommendationsList) {
            recommendationsList.innerHTML = this.data.predictions.recommendedActions.map(action => `
                <div class="recommendation-item">
                    <i class="fas fa-lightbulb"></i>
                    <p>${action}</p>
                </div>
            `).join('');
        }

        // Also render insights
        const aiInsights = document.getElementById('ai-insights');
        if (aiInsights) {
            const insights = [
                {
                    title: 'Sleep Optimization',
                    description: 'Your sleep quality correlates strongly with academic performance. Consider maintaining consistent sleep schedule.'
                },
                {
                    title: 'Stress Management',
                    description: 'Stress levels spike during exam periods. Implement breathing exercises 30 minutes before studying.'
                },
                {
                    title: 'Activity Balance',
                    description: 'Your current activity levels are optimal for maintaining energy throughout study sessions.'
                }
            ];

            aiInsights.innerHTML = insights.map(insight => `
                <div class="insight-item">
                    <h5>${insight.title}</h5>
                    <p>${insight.description}</p>
                </div>
            `).join('');
        }
    }

    // Initialize charts for analytics view
    initCharts() {
        this.initHeartRateChart();
        this.initSleepChart();
        this.initStressChart();
        this.updateBurnoutGauge();
    }

    initHeartRateChart() {
        const ctx = document.getElementById('heart-rate-chart');
        if (!ctx || this.charts.heartRate) return;

        const data = this.data.historicalData.heartRate.slice(-7); // Last 7 days
        
        this.charts.heartRate = new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.map(d => d.time),
                datasets: [{
                    label: 'Heart Rate (BPM)',
                    data: data.map(d => d.value),
                    borderColor: '#1FB8CD',
                    backgroundColor: 'rgba(31, 184, 205, 0.1)',
                    fill: true,
                    tension: 0.4,
                    pointRadius: 4,
                    pointHoverRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 60,
                        max: 100,
                        grid: {
                            color: 'rgba(0,0,0,0.1)'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }

    initSleepChart() {
        const ctx = document.getElementById('sleep-chart');
        if (!ctx || this.charts.sleep) return;

        const data = this.data.historicalData.sleepData;
        
        this.charts.sleep = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: data.map(d => new Date(d.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })),
                datasets: [
                    {
                        label: 'Deep Sleep',
                        data: data.map(d => d.deepSleep),
                        backgroundColor: '#1FB8CD',
                        borderRadius: 4
                    },
                    {
                        label: 'Light Sleep',
                        data: data.map(d => d.lightSleep),
                        backgroundColor: '#FFC185',
                        borderRadius: 4
                    },
                    {
                        label: 'REM Sleep',
                        data: data.map(d => d.remSleep),
                        backgroundColor: '#B4413C',
                        borderRadius: 4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                },
                scales: {
                    x: {
                        stacked: true,
                        grid: {
                            display: false
                        }
                    },
                    y: {
                        stacked: true,
                        beginAtZero: true,
                        max: 9,
                        title: {
                            display: true,
                            text: 'Hours'
                        }
                    }
                }
            }
        });
    }

    initStressChart() {
        const ctx = document.getElementById('stress-chart');
        if (!ctx || this.charts.stress) return;

        const data = this.data.historicalData.stressLevels;
        
        this.charts.stress = new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.map(d => new Date(d.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })),
                datasets: [{
                    label: 'Stress Level',
                    data: data.map(d => d.level),
                    borderColor: '#D2BA4C',
                    backgroundColor: 'rgba(210, 186, 76, 0.1)',
                    fill: true,
                    tension: 0.4,
                    pointRadius: 6,
                    pointHoverRadius: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 4,
                        stepSize: 1,
                        ticks: {
                            callback: function(value) {
                                const labels = ['None', 'Low', 'Medium', 'High', 'Very High'];
                                return labels[value];
                            }
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }

    initCorrelationChart() {
        const ctx = document.getElementById('correlation-chart');
        if (!ctx || this.charts.correlation) return;

        // Sample correlation data
        const correlationData = [
            { metric: 'Sleep Quality', academic: 85, health: 88 },
            { metric: 'Stress Level', academic: 45, health: 40 },
            { metric: 'Exercise Hours', academic: 75, health: 90 },
            { metric: 'Study Hours', academic: 95, health: 70 },
            { metric: 'Social Time', academic: 60, health: 80 }
        ];

        this.charts.correlation = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: correlationData.map(d => d.metric),
                datasets: [
                    {
                        label: 'Academic Performance',
                        data: correlationData.map(d => d.academic),
                        borderColor: '#1FB8CD',
                        backgroundColor: 'rgba(31, 184, 205, 0.2)',
                        pointBackgroundColor: '#1FB8CD',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: '#1FB8CD'
                    },
                    {
                        label: 'Health Score',
                        data: correlationData.map(d => d.health),
                        borderColor: '#FFC185',
                        backgroundColor: 'rgba(255, 193, 133, 0.2)',
                        pointBackgroundColor: '#FFC185',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: '#FFC185'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                elements: {
                    line: {
                        borderWidth: 3
                    }
                },
                scales: {
                    r: {
                        angleLines: {
                            display: false
                        },
                        suggestedMin: 0,
                        suggestedMax: 100
                    }
                },
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }

    updateBurnoutGauge() {
        const burnoutRisk = this.data.predictions.burnoutRisk;
        const gauge = document.getElementById('burnout-gauge');
        const riskValue = document.getElementById('burnout-risk');
        const riskLabel = gauge.nextElementSibling.nextElementSibling;
        
        if (riskValue) riskValue.textContent = burnoutRisk;
        
        // Update risk label and color based on risk level
        if (burnoutRisk < 30) {
            riskLabel.textContent = 'Low Risk';
            riskLabel.style.color = 'var(--color-success)';
        } else if (burnoutRisk < 60) {
            riskLabel.textContent = 'Medium Risk';
            riskLabel.style.color = 'var(--color-warning)';
        } else {
            riskLabel.textContent = 'High Risk';
            riskLabel.style.color = 'var(--color-error)';
        }
    }

    // Time range selector for analytics
    initTimeRangeSelector() {
        const rangeButtons = document.querySelectorAll('[data-range]');
        rangeButtons.forEach(button => {
            button.addEventListener('click', () => {
                rangeButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                const range = parseInt(button.dataset.range);
                this.updateChartsForRange(range);
            });
        });
    }

    updateChartsForRange(days) {
        // Update heart rate chart data based on selected range
        if (this.charts.heartRate) {
            const data = this.data.historicalData.heartRate.slice(-days);
            this.charts.heartRate.data.labels = data.map(d => d.time);
            this.charts.heartRate.data.datasets[0].data = data.map(d => d.value);
            this.charts.heartRate.update();
        }
        
        // Similar updates for other charts...
    }

    // Alert filtering
    initAlertFilters() {
        const filterButtons = document.querySelectorAll('[data-filter]');
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                const filter = button.dataset.filter;
                this.filterAlerts(filter);
            });
        });
    }

    filterAlerts(filter) {
        const alertItems = document.querySelectorAll('.alert-item-full');
        
        alertItems.forEach(item => {
            const shouldShow = this.shouldShowAlert(item, filter);
            item.style.display = shouldShow ? 'block' : 'none';
        });
    }

    shouldShowAlert(alertElement, filter) {
        if (filter === 'all') return true;
        
        if (filter === 'unresolved') {
            return !alertElement.querySelector('.status--success');
        }
        
        return alertElement.classList.contains(filter);
    }

    // Real-time updates simulation
    startRealTimeUpdates() {
        setInterval(() => {
            this.simulateRealTimeData();
            this.updateDashboardMetrics();
        }, 30000); // Update every 30 seconds
    }

    simulateRealTimeData() {
        // Simulate small changes in health metrics with proper rounding
        const currentHR = this.data.currentHealthMetrics.heartRate;
        this.data.currentHealthMetrics.heartRate = Math.round(Math.max(60, Math.min(100, currentHR + (Math.random() - 0.5) * 4)));
        
        // Update blood pressure with small variations
        const currentSystolic = this.data.currentHealthMetrics.bloodPressure.systolic;
        const currentDiastolic = this.data.currentHealthMetrics.bloodPressure.diastolic;
        this.data.currentHealthMetrics.bloodPressure.systolic = Math.round(Math.max(110, Math.min(130, currentSystolic + (Math.random() - 0.5) * 3)));
        this.data.currentHealthMetrics.bloodPressure.diastolic = Math.round(Math.max(70, Math.min(85, currentDiastolic + (Math.random() - 0.5) * 2)));
        
        // Update steps throughout the day
        this.data.lifestyle.dailySteps += Math.floor(Math.random() * 50);
        
        // Simulate small changes in oxygen saturation with proper rounding
        const currentOxygen = this.data.currentHealthMetrics.oxygenSaturation;
        this.data.currentHealthMetrics.oxygenSaturation = Math.round(Math.max(95, Math.min(100, currentOxygen + (Math.random() - 0.5) * 1)));
        
        // Update sleep quality occasionally
        if (Math.random() < 0.1) { // 10% chance to update
            const currentSleep = this.data.currentHealthMetrics.sleepQuality;
            this.data.currentHealthMetrics.sleepQuality = Math.round(Math.max(70, Math.min(100, currentSleep + (Math.random() - 0.5) * 3)));
        }
    }

    // Refresh button functionality
    initRefreshButton() {
        const refreshBtn = document.getElementById('refresh-btn');
        refreshBtn.addEventListener('click', () => {
            const icon = refreshBtn.querySelector('i');
            icon.style.animation = 'spin 1s linear';
            
            // Simulate data refresh
            setTimeout(() => {
                this.simulateRealTimeData();
                this.updateDashboardMetrics();
                icon.style.animation = '';
            }, 1000);
        });
    }
}

// Initialize the dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.dashboard = new HealthDashboard();
});

// Add CSS animation for refresh button
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);