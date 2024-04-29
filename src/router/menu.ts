export const menuTree = [
  {
    path: '/monitoring-center',
    name: 'MonitoringCenter',
    meta: {
      sort: 1,
      icon: 'FillNews',
      title: '监测中心',
      menu: true,
    },
    children: [
      {
        path: 'onepic-monitoring',
        name: 'OnepicMonitoring',
        fullPath: '/one-pic/onepic-monitoring',
        meta: {
          title: '工作台管理',
          outLink: true,
          gloableKey: 'ONE_MONITORING_LINK',
          menu: true,
        },
      },
      {
        path: 'monitoring-alarm',
        name: 'MonitoringAlarm',
        children: [
          {
            path: 'alarm-list',
            name: 'AlarmList',
            fullPath: '/monitoring-warning/alarm-management/alarm-list',
            meta: {
              title: '实时报警管理',
              menu: true,
              keepAlive: true,
            },
          },
          {
            path: 'alarm-judgment',
            name: 'AlarmJudgment',
            fullPath: '/monitoring-warning/alarm-management/alarm-judgment',
            meta: {
              title: '报警研判管理',
              menu: true,
              keepAlive: true,
            },
          },
          {
            path: 'alarm-event',
            name: 'AlarmEvent',
            fullPath: '/monitoring-warning/alarm-management/alarm-judgment2',
            meta: {
              title: '报警事件统计',
              menu: true,
              keepAlive: true,
            },
          },
        ],
        meta: {
          title: '监测报警管理',
          menu: true,
          hasParent: true,
          keepAlive: true,
        },
      },
      {
        path: 'monitoring-statistical-analysis',
        name: 'MonitoringStatisticalAnalysis',
        meta: {
          title: '监测统计分析',
          menu: true,
          hasParent: true,
        },
        children: [
          {
            path: 'alarm-composite-analysis',
            name: 'AlarmCompositeAnalysis',
            fullPath: '/whole-analysis/alarm-composite-analysis',
            meta: {
              title: '监测布控统计',
              menu: true,
            },
          },
          {
            path: 'alarm-high-incidence',
            name: 'AlarmHighIncidence',
            fullPath: '/whole-analysis/alarm-high-incidence',
            meta: {
              title: '报警统计分析',
              menu: true,
            },
          },
        ],
      },
    ],
  },
  {
    path: '/warning-center',
    name: 'WarningCenter',
    meta: {
      sort: 2,
      icon: 'FillAlert',
      title: '预警中心',
      menu: true,
    },
    children: [
      {
        path: 'onepic-warning',
        name: 'OnepicWarning',
        fullPath: '/one-pic/onepic-warning',
        meta: {
          title: '工作台管理',
          outLink: true,
          gloableKey: 'ONE_WARNING_LINK',
        },
      },
      {
        path: 'warning-management',
        name: 'WarningManagement',
        meta: {
          title: '预警信息管理',
          menu: true,
          hasParent: true,
        },
        children: [
          {
            path: 'historical-warning',
            name: 'HistoricalWarning',
            fullPath: '/monitoring-warning/warning-management/historical-warning',
            meta: {
              title: '预警信息生成',
              menu: true,
            },
          },
          {
            path: 'warning-judgment-statistical',
            name: 'WarningJudgmentStatistical',
            fullPath: '/monitoring-warning/warning-management/warning-judgment',
            meta: {
              title: '预警研判分析',
              menu: true,
            },
          },
          {
            path: 'warning-judgment-analysis',
            name: 'WarningJudgmentAnalysis',
            fullPath: '/monitoring-warning/warning-management/warning-judgment2',
            meta: {
              title: '预警研判统计',
              menu: true,
            },
          },
        ],
      },
      {
        path: 'whole-analysis',
        name: 'WholeAnalysis',
        children: [
          {
            path: 'warning-composite-analysis',
            name: 'WarningCompositeAnalysis',
            fullPath: '/whole-analysis/warning-composite-analysis',
            meta: {
              title: '预警信息统计',
            },
          },
        ],
        meta: {
          sort: 7,
          // icon: 'FillChartBar',
          title: '预警统计分析',
          menu: true,
          hasParent: true,
        },
      },
    ],
  },
  {
    path: '/monitor-warning-center',
    name: 'MonitorWarningCenter',
    meta: {
      sort: 3,
      icon: 'FillFirm',
      title: '监测预警中枢',
      menu: true,
    },
    children: [
      {
        path: 'alarm-config',
        name: 'ygfWarningConfig',
        children: [
          {
            path: 'alarm-strategy-config',
            name: 'ygfAlarmStrategyConfig',
            fullPath: '/alarm-config/alarm-strategy-config',
            meta: {
              title: '报警策略管理',
            },
          },
        ],
        meta: {
          sort: 3,
          title: '监测中枢',
          menu: true,
          hasParent: true,
        },
      },
      {
        path: 'monitoring-config',
        name: 'monitoringConfigRoutes',
        children: [
          {
            path: 'alarm-strategy-config',
            name: 'alarmStrategyConfig',
            fullPath: '/monitoring-config/alarm-strategy-config',
            meta: {
              title: '预警策略管理',
            },
          },
        ],
        meta: {
          sort: 2,
          title: '预警中枢',
          menu: true,
          hasParent: true,
        },
      },
    ],
  },
  {
    path: '/scenario-configuration-center',
    name: 'ScenarioConfigurationCenter',
    meta: {
      sort: 4,
      icon: 'FillShapeAnnular',
      title: '场景配置中心',
      menu: true,
    },
    props: {
      default: false,
    },
    children: [
      {
        path: 'scene-config',
        name: 'SceneConfig',
        children: [
          {
            path: 'scene',
            name: 'Scene',
            fullPath: '/scene-config/scene',
            meta: {
              title: '场景定义',
            },
          },
          {
            path: 'scene-notice',
            name: 'SceneNoticeConfig',
            fullPath: '/scene-config/scene-notice',
            meta: {
              title: '通知模板配置',
              showBack: true,
            },
          },
        ],
        meta: {
          sort: 9,
          // icon: 'FillFirm',
          title: '业务场景管理',
          menu: true,
          hasParent: true,
        },
      },
      {
        path: 'monitoring-elements',
        name: 'monitoringElements',
        children: [
          {
            path: 'subject',
            name: 'subject',
            fullPath: '/monitoring-elements/subject',
            meta: {
              title: '监测主体管理',
              menu: true,
            },
          },
          {
            path: 'point',
            name: 'point',
            fullPath: '/monitoring-elements/point',
            meta: {
              title: '监测点管理',
              menu: true,
            },
          },
          {
            path: 'equipment',
            name: 'equipment',
            fullPath: '/monitoring-elements/equipment',
            meta: {
              title: '监测设备管理',
              keepAlive: true,
              menu: true,
            },
          },
        ],
        meta: {
          sort: 9,
          // icon: 'FillFirm',
          title: '监测要素管理',
          menu: true,
          hasParent: true,
        },
      },
      {
        path: 'notification-management',
        name: 'NotificationManagement',
        children: [
          {
            path: 'scene-notice',
            name: 'SceneNotice',
            fullPath: '/scene-config/scene-notice2',
            meta: {
              title: '通知模板配置',
              showBack: true,
            },
          },
          {
            path: 'alarm-notice',
            name: 'AlarmNotice',
            fullPath: '/monitoring-warning/alarm-management/alarm-notice',
            meta: {
              title: '报警通知管理',
              menu: true,
            },
          },
          {
            path: 'warning-notice',
            name: 'WarningNotice',
            fullPath: '/monitoring-warning/warning-management/warning-notice',
            meta: {
              title: '预警通知管理',
              menu: true,
            },
          },
        ],
        meta: {
          sort: 9,
          // icon: 'FillFirm',
          title: '通知管理',
          menu: true,
          hasParent: true,
        },
      },
    ],
  },
  {
    path: '/general-configuration-center',
    name: 'GeneralConfigurationCenter',
    meta: {
      sort: 5,
      icon: 'FillChartDoughnut',
      title: '通用配置中心',
      menu: true,
    },
    props: {
      default: false,
    },
    children: [
      {
        path: 'event-configuration',
        name: 'EventConfiguration',
        children: [
          {
            path: 'event-type',
            name: 'eventTypeConfig',
            fullPath: '/monitoring-config/event-type',
            meta: {
              title: '事件类型配置',
            },
          },
          {
            path: 'event-level',
            name: 'eventLevelConfig',
            fullPath: '/monitoring-config/event-type2',
            meta: {
              title: '事件等级配置',
            },
          },
          {
            path: 'tag-classification-mgmt',
            name: 'tagClassificationMgmt',
            fullPath: '/system-common-config/tag-classification-mgmt',
            meta: {
              title: '标签分类管理',
            },
          },
        ],
        meta: {
          sort: 9,
          // icon: 'FillFirm',
          title: '事件配置',
          menu: true,
          hasParent: true,
        },
      },
      {
        path: 'MonitoringFactorConfiguration',
        name: 'MonitoringFactorConfiguration',
        children: [
          {
            path: 'indicator-mgmt',
            name: 'indicatorManagement',
            fullPath: '/system-common-config/indicator-mgmt',
            meta: {
              title: '监测因子管理',
            },
          },
        ],
        meta: {
          sort: 9,
          // icon: 'FillFirm',
          title: '监测因子配置',
          menu: true,
          hasParent: true,
        },
      },
    ],
  },
];
