var config = {
    "apiURL": "http://localhost:8000/api",
    "url": "http://localhost:8000",
    "locale": "pt_BR",
    "locales": ["en", "pt_BR"],
    "fallback_locale": "en",
    "timezone": "UTC",
    "is_secure": false,
    "broadcasting": {
        "default": "null",
        "connection": {
            "driver": "null"
        }
    },
    "options": {
        "time_format": "H:i",
        "date_format": "d/m/Y",
        "company_name": "Wattssolar",
        "logo_light": null,
        "logo_dark": null,
        "first_day_of_week": 0,
        "disable_password_forgot": false,
        "allow_lost_reason_enter": true,
        "lost_reason_is_required": true,
        "tax_type": "no_tax",
        "tax_label": "TAX",
        "tax_rate": 0,
        "discount_type": "percent"
    },
    "max_upload_size": 26214400,
    "privacyPolicyUrl": "http://localhost:8000/privacy-policy",
    "date_formats": ["d-m-Y", "d/m/Y", "m-d-Y", "m.d.Y", "m/d/Y", "Y-m-d", "d.m.Y", "F j, Y", "j F, Y", "D, F j, Y", "l, F j, Y"],
    "time_formats": ["H:i", "h:i A", "h:i a"],
    "currency": {
        "name": "Brazilian Real",
        "code": 986,
        "rate": 1,
        "precision": 2,
        "subunit": 100,
        "symbol": "R$",
        "symbol_first": true,
        "decimal_mark": ",",
        "thousands_separator": ".",
        "prefix": "R$",
        "suffix": "",
        "iso_code": "BRL"
    },
    "taxes": {
        "types": ["exclusive", "inclusive", "no_tax"]
    },
    "reCaptcha": {
        "configured": false,
        "validate": false,
        "siteKey": null
    },
    "fields": {
        "views": {
            "update": "update",
            "create": "create",
            "detail": "detail"
        },
        "height": {
            "contact": null,
            "deal": null,
            "company": null
        },
        "custom_fields": {
            "Boolean": {
                "type": "Boolean",
                "className": "App\\\\Innoclapps\\\\Fields\\\\Boolean",
                "uniqueable": false,
                "optionable": false,
                "multioptionable": false
            },
            "Timezone": {
                "type": "Timezone",
                "className": "App\\\\Innoclapps\\\\Fields\\\\Timezone",
                "uniqueable": false,
                "optionable": false,
                "multioptionable": false
            },
            "Date": {
                "type": "Date",
                "className": "App\\\\Innoclapps\\\\Fields\\\\Date",
                "uniqueable": false,
                "optionable": false,
                "multioptionable": false
            },
            "Select": {
                "type": "Select",
                "className": "App\\\\Innoclapps\\\\Fields\\\\Select",
                "uniqueable": false,
                "optionable": true,
                "multioptionable": false
            },
            "Email": {
                "type": "Email",
                "className": "App\\\\Innoclapps\\\\Fields\\\\Email",
                "uniqueable": true,
                "optionable": false,
                "multioptionable": false
            },
            "Radio": {
                "type": "Radio",
                "className": "App\\\\Innoclapps\\\\Fields\\\\Radio",
                "uniqueable": false,
                "optionable": true,
                "multioptionable": false
            },
            "Number": {
                "type": "Number",
                "className": "App\\\\Innoclapps\\\\Fields\\\\Number",
                "uniqueable": true,
                "optionable": false,
                "multioptionable": false
            },
            "Numeric": {
                "type": "Numeric",
                "className": "App\\\\Innoclapps\\\\Fields\\\\Numeric",
                "uniqueable": false,
                "optionable": false,
                "multioptionable": false
            },
            "DateTime": {
                "type": "DateTime",
                "className": "App\\\\Innoclapps\\\\Fields\\\\DateTime",
                "uniqueable": false,
                "optionable": false,
                "multioptionable": false
            },
            "Textarea": {
                "type": "Textarea",
                "className": "App\\\\Innoclapps\\\\Fields\\\\Textarea",
                "uniqueable": false,
                "optionable": false,
                "multioptionable": false
            },
            "MultiSelect": {
                "type": "MultiSelect",
                "className": "App\\\\Innoclapps\\\\Fields\\\\MultiSelect",
                "uniqueable": false,
                "optionable": true,
                "multioptionable": true
            },
            "Text": {
                "type": "Text",
                "className": "App\\\\Innoclapps\\\\Fields\\\\Text",
                "uniqueable": true,
                "optionable": false,
                "multioptionable": false
            },
            "Checkbox": {
                "type": "Checkbox",
                "className": "App\\\\Innoclapps\\\\Fields\\\\Checkbox",
                "uniqueable": false,
                "optionable": true,
                "multioptionable": true
            }
        },
        "custom_field_prefix": "cf_",
        "groups": {
            "activities": "activities",
            "activity-types": "activity-types",
            "call-outcomes": "call-outcomes",
            "calls": "calls",
            "companies": "companies",
            "contacts": "contacts",
            "deals": "deals",
            "document-types": "document-types",
            "documents": "documents",
            "industries": "industries",
            "lost-reasons": "lost-reasons",
            "products": "products",
            "sources": "sources"
        }
    },
    "user_id": 1,
    "purchase_key": "",
    "resources": {
        "activities": {
            "name": "activities",
            "label": "Atividades",
            "singularLabel": "Atividade",
            "fieldsCustomizable": false,
            "acceptsUniqueCustomFields": false
        },
        "activity-types": {
            "name": "activity-types",
            "label": "Tipos de Atividade",
            "singularLabel": "Tipo de Atividade",
            "fieldsCustomizable": false,
            "acceptsUniqueCustomFields": false
        },
        "call-outcomes": {
            "name": "call-outcomes",
            "label": "Resultados da Chamada",
            "singularLabel": "Resultado da Chamada",
            "fieldsCustomizable": false,
            "acceptsUniqueCustomFields": false
        },
        "calls": {
            "name": "calls",
            "label": "Calls",
            "singularLabel": "Call",
            "fieldsCustomizable": false,
            "acceptsUniqueCustomFields": false
        },
        "companies": {
            "name": "companies",
            "label": "Empresas",
            "singularLabel": "Empresa",
            "fieldsCustomizable": true,
            "acceptsUniqueCustomFields": true,
            "frontend": {
                "view": {
                    "tabs": [{
                        "props": [],
                        "id": "timeline",
                        "component": "timeline-tab"
                    }, {
                        "props": [],
                        "id": "activities",
                        "component": "activity-tab"
                    }, {
                        "props": [],
                        "id": "emails",
                        "component": "emails-tab"
                    }, {
                        "props": [],
                        "id": "documents",
                        "component": "documents-tab"
                    }, {
                        "props": [],
                        "id": "calls",
                        "component": "calls-tab"
                    }, {
                        "props": [],
                        "id": "notes",
                        "component": "notes-tab"
                    }],
                    "sections": [{
                        "enabled": true,
                        "order": null,
                        "heading": "Detalhes",
                        "id": "details",
                        "component": "details-section"
                    }, {
                        "enabled": true,
                        "order": null,
                        "heading": "Negócios",
                        "id": "deals",
                        "component": "deals-section"
                    }, {
                        "enabled": true,
                        "order": null,
                        "heading": "Contatos",
                        "id": "contacts",
                        "component": "contacts-section"
                    }, {
                        "enabled": true,
                        "order": null,
                        "heading": "Anexos",
                        "id": "media",
                        "component": "media-section"
                    }, {
                        "enabled": true,
                        "order": null,
                        "heading": " Empresas Filhas",
                        "id": "child",
                        "component": "child-companies-section"
                    }]
                }
            }
        },
        "contacts": {
            "name": "contacts",
            "label": "Contatos",
            "singularLabel": "Contato",
            "fieldsCustomizable": true,
            "acceptsUniqueCustomFields": true,
            "frontend": {
                "view": {
                    "tabs": [{
                        "props": [],
                        "id": "timeline",
                        "component": "timeline-tab"
                    }, {
                        "props": [],
                        "id": "activities",
                        "component": "activity-tab"
                    }, {
                        "props": [],
                        "id": "emails",
                        "component": "emails-tab"
                    }, {
                        "props": [],
                        "id": "documents",
                        "component": "documents-tab"
                    }, {
                        "props": [],
                        "id": "calls",
                        "component": "calls-tab"
                    }, {
                        "props": [],
                        "id": "notes",
                        "component": "notes-tab"
                    }],
                    "sections": [{
                        "enabled": true,
                        "order": null,
                        "heading": "Detalhes",
                        "id": "details",
                        "component": "details-section"
                    }, {
                        "enabled": true,
                        "order": null,
                        "heading": "Negócios",
                        "id": "deals",
                        "component": "deals-section"
                    }, {
                        "enabled": true,
                        "order": null,
                        "heading": "Empresas",
                        "id": "companies",
                        "component": "companies-section"
                    }, {
                        "enabled": true,
                        "order": null,
                        "heading": "Anexos",
                        "id": "media",
                        "component": "media-section"
                    }]
                }
            }
        },
        "deals": {
            "name": "deals",
            "label": "Negócios",
            "singularLabel": "Negócio",
            "fieldsCustomizable": true,
            "acceptsUniqueCustomFields": false,
            "frontend": {
                "view": {
                    "tabs": [{
                        "props": [],
                        "id": "timeline",
                        "component": "timeline-tab"
                    }, {
                        "props": [],
                        "id": "activities",
                        "component": "activity-tab"
                    }, {
                        "props": [],
                        "id": "emails",
                        "component": "emails-tab"
                    }, {
                        "props": [],
                        "id": "documents",
                        "component": "documents-tab"
                    }, {
                        "props": [],
                        "id": "calls",
                        "component": "calls-tab"
                    }, {
                        "props": [],
                        "id": "notes",
                        "component": "notes-tab"
                    }, {
                        "props": [],
                        "id": "products",
                        "component": "products-record-tab"
                    }],
                    "sections": [{
                        "enabled": true,
                        "order": null,
                        "heading": "Detalhes",
                        "id": "details",
                        "component": "details-section"
                    }, {
                        "enabled": true,
                        "order": null,
                        "heading": "Contatos",
                        "id": "contacts",
                        "component": "contacts-section"
                    }, {
                        "enabled": true,
                        "order": null,
                        "heading": "Empresas",
                        "id": "companies",
                        "component": "companies-section"
                    }, {
                        "enabled": true,
                        "order": null,
                        "heading": "Anexos",
                        "id": "media",
                        "component": "media-section"
                    }]
                }
            }
        },
        "document-templates": {
            "name": "document-templates",
            "label": "Modelos de Documento",
            "singularLabel": "Modelo de Documento",
            "fieldsCustomizable": false,
            "acceptsUniqueCustomFields": false
        },
        "document-types": {
            "name": "document-types",
            "label": "Tipos de Documentos",
            "singularLabel": "Tipo de Documento",
            "fieldsCustomizable": false,
            "acceptsUniqueCustomFields": false
        },
        "documents": {
            "name": "documents",
            "label": "Documentos",
            "singularLabel": "Documento",
            "fieldsCustomizable": false,
            "acceptsUniqueCustomFields": false
        },
        "emails": {
            "name": "emails",
            "label": "Email Messages",
            "singularLabel": "Email Message",
            "fieldsCustomizable": false,
            "acceptsUniqueCustomFields": false
        },
        "industries": {
            "name": "industries",
            "label": "Indústrias",
            "singularLabel": "Indústria",
            "fieldsCustomizable": false,
            "acceptsUniqueCustomFields": false
        },
        "lost-reasons": {
            "name": "lost-reasons",
            "label": "Motivos de Perda",
            "singularLabel": "Motivo da Perda",
            "fieldsCustomizable": false,
            "acceptsUniqueCustomFields": false
        },
        "notes": {
            "name": "notes",
            "label": "Notes",
            "singularLabel": "Note",
            "fieldsCustomizable": false,
            "acceptsUniqueCustomFields": false
        },
        "pipeline-stages": {
            "name": "pipeline-stages",
            "label": "Pipeline Stages",
            "singularLabel": "Pipeline Stage",
            "fieldsCustomizable": false,
            "acceptsUniqueCustomFields": false
        },
        "pipelines": {
            "name": "pipelines",
            "label": "Pipelines",
            "singularLabel": "Pipeline",
            "fieldsCustomizable": false,
            "acceptsUniqueCustomFields": false
        },
        "products": {
            "name": "products",
            "label": "Produtos",
            "singularLabel": "Produto",
            "fieldsCustomizable": true,
            "acceptsUniqueCustomFields": true
        },
        "sources": {
            "name": "sources",
            "label": "Fontes",
            "singularLabel": "Fonte",
            "fieldsCustomizable": false,
            "acceptsUniqueCustomFields": false
        },
        "users": {
            "name": "users",
            "label": "Users",
            "singularLabel": "User",
            "fieldsCustomizable": false,
            "acceptsUniqueCustomFields": false
        }
    },
    "settings": {
        "menu": [{
            "id": "fields",
            "title": "Campos",
            "route": null,
            "icon": "SquaresPlus",
            "children": [{
                "id": "fields-companies",
                "title": "Empresa",
                "route": "/settings/fields/companies",
                "icon": null,
                "children": [],
                "order": null
            }, {
                "id": "fields-contacts",
                "title": "Contato",
                "route": "/settings/fields/contacts",
                "icon": null,
                "children": [],
                "order": null
            }, {
                "id": "fields-deals",
                "title": "Negócio",
                "route": "/settings/fields/deals",
                "icon": null,
                "children": [],
                "order": null
            }, {
                "id": "fields-products",
                "title": "Produto",
                "route": "/settings/fields/products",
                "icon": null,
                "children": [],
                "order": null
            }],
            "order": 10
        }, {
            "id": "integrations",
            "title": "Integrações",
            "route": null,
            "icon": "Globe",
            "children": [{
                "id": "pusher",
                "title": "Pusher",
                "route": "/settings/integrations/pusher",
                "icon": null,
                "children": [],
                "order": null
            }, {
                "id": "microsoft",
                "title": "Microsoft",
                "route": "/settings/integrations/microsoft",
                "icon": null,
                "children": [],
                "order": null
            }, {
                "id": "google",
                "title": "Google",
                "route": "/settings/integrations/google",
                "icon": null,
                "children": [],
                "order": null
            }, {
                "id": "twilio",
                "title": "Twilio",
                "route": "/settings/integrations/twilio",
                "icon": null,
                "children": [],
                "order": null
            }, {
                "id": "zapier",
                "title": "Zapier",
                "route": "/settings/integrations/zapier",
                "icon": null,
                "children": [],
                "order": null
            }],
            "order": 20
        }, {
            "id": "activities",
            "title": "Atividades",
            "route": "/settings/activities",
            "icon": "Calendar",
            "children": [],
            "order": 21
        }, {
            "id": "deals",
            "title": "Negócios",
            "route": "/settings/deals",
            "icon": "Folder",
            "children": [],
            "order": 22
        }, {
            "id": "products",
            "title": "Produtos",
            "route": "/settings/products",
            "icon": "Bars3CenterLeft",
            "children": [],
            "order": 23
        }, {
            "id": "documents",
            "title": "Documentos",
            "route": "/settings/documents",
            "icon": "DocumentText",
            "children": [],
            "order": 23
        }, {
            "id": "companies",
            "title": "Empresas",
            "route": "/settings/companies",
            "icon": "OfficeBuilding",
            "children": [],
            "order": 24
        }, {
            "id": "calls",
            "title": "Chamadas",
            "route": "/settings/calls",
            "icon": "DeviceMobile",
            "children": [],
            "order": 25
        }, {
            "id": "web-forms",
            "title": "Formulários da Web",
            "route": "/settings/forms",
            "icon": "MenuAlt3",
            "children": [],
            "order": 30
        }, {
            "id": "workflows",
            "title": "Fluxos de Trabalho",
            "route": "/settings/workflows",
            "icon": "AdjustmentsVertical",
            "children": [],
            "order": 40
        }, {
            "id": "users",
            "title": "Usuários",
            "route": "/settings/users",
            "icon": "Users",
            "children": [],
            "order": 41
        }, {
            "id": "mailables",
            "title": "Modelos de E-mail",
            "route": "/settings/mailables",
            "icon": "Mail",
            "children": [],
            "order": 50
        }, {
            "id": "brands",
            "title": "Marcas",
            "route": "/settings/brands",
            "icon": "ColorSwatch",
            "children": [],
            "order": 50
        }, {
            "id": "security",
            "title": "Segurança",
            "route": null,
            "icon": "ShieldCheck",
            "children": [{
                "id": "security",
                "title": "Geral",
                "route": "/settings/security",
                "icon": null,
                "children": [],
                "order": null
            }, {
                "id": "recaptcha",
                "title": "reCaptcha",
                "route": "/settings/recaptcha",
                "icon": null,
                "children": [],
                "order": null
            }],
            "order": 60
        }, {
            "id": "system",
            "title": "Sistema",
            "route": null,
            "icon": "Cog",
            "children": [{
                "id": "update",
                "title": "Atualizar",
                "route": "/settings/update",
                "icon": null,
                "children": [],
                "order": null
            }, {
                "id": "tools",
                "title": "Ferramentas",
                "route": "/settings/tools",
                "icon": null,
                "children": [],
                "order": null
            }, {
                "id": "translator",
                "title": "Tradutor",
                "route": "/settings/translator",
                "icon": null,
                "children": [],
                "order": null
            }, {
                "id": "system-info",
                "title": "Informações do Sistema",
                "route": "/settings/info",
                "icon": null,
                "children": [],
                "order": null
            }, {
                "id": "system-logs",
                "title": "Logs",
                "route": "/settings/logs",
                "icon": null,
                "children": [],
                "order": null
            }],
            "order": 70
        }]
    },
    "menu": [{
        "id": "deals",
        "name": "Negócios",
        "singularName": "Negócio",
        "route": "/deals",
        "icon": "Banknotes",
        "inQuickCreate": true,
        "quickCreateRoute": "/deals/create",
        "quickCreateName": "Negócio",
        "position": 5,
        "badge": null,
        "badgeVariant": "warning",
        "keyboardShortcutChar": "D"
    }, {
        "id": "activities",
        "name": "Atividades",
        "singularName": "Atividade",
        "route": "/activities",
        "icon": "Calendar",
        "inQuickCreate": true,
        "quickCreateRoute": "/activities/create",
        "quickCreateName": "Atividade",
        "position": 10,
        "badge": null,
        "badgeVariant": "warning",
        "keyboardShortcutChar": "A"
    }, {
        "id": "telefonar",
        "name": "Telefonar",
        "singularName": null,
        "route": "/telefonar",
        "icon": "ChartSquareBar",
        "inQuickCreate": false,
        "quickCreateRoute": null,
        "quickCreateName": null,
        "position": 11,
        "badge": null,
        "badgeVariant": "warning",
        "keyboardShortcutChar": null
    }, {
        "id": "inbox",
        "name": "Caixa de entrada",
        "singularName": null,
        "route": "/inbox",
        "icon": "Mail",
        "inQuickCreate": false,
        "quickCreateRoute": "/inbox?compose=true",
        "quickCreateName": "Enviar Email",
        "position": 15,
        "badge": 0,
        "badgeVariant": "info",
        "keyboardShortcutChar": "E"
    }, {
        "id": "documents",
        "name": "Documentos",
        "singularName": "Documento",
        "route": "/documents",
        "icon": "DocumentText",
        "inQuickCreate": true,
        "quickCreateRoute": "/documents/create",
        "quickCreateName": "Documento",
        "position": 20,
        "badge": null,
        "badgeVariant": "warning",
        "keyboardShortcutChar": "F"
    }, {
        "id": "contacts",
        "name": "Contatos",
        "singularName": "Contato",
        "route": "/contacts",
        "icon": "Users",
        "inQuickCreate": true,
        "quickCreateRoute": "/contacts/create",
        "quickCreateName": "Contato",
        "position": 25,
        "badge": null,
        "badgeVariant": "warning",
        "keyboardShortcutChar": "C"
    }, {
        "id": "companies",
        "name": "Empresas",
        "singularName": "Empresa",
        "route": "/companies",
        "icon": "OfficeBuilding",
        "inQuickCreate": true,
        "quickCreateRoute": "/companies/create",
        "quickCreateName": "Empresa",
        "position": 30,
        "badge": null,
        "badgeVariant": "warning",
        "keyboardShortcutChar": "O"
    }, {
        "id": "dashboard",
        "name": "Visão geral",
        "singularName": null,
        "route": "/dashboard",
        "icon": "ChartSquareBar",
        "inQuickCreate": false,
        "quickCreateRoute": null,
        "quickCreateName": null,
        "position": 40,
        "badge": null,
        "badgeVariant": "warning",
        "keyboardShortcutChar": null
    }, {
        "id": "products",
        "name": "Produtos",
        "singularName": "Produto",
        "route": "/products",
        "icon": "Bars3CenterLeft",
        "inQuickCreate": true,
        "quickCreateRoute": "/products/create",
        "quickCreateName": "Produto",
        "position": 45,
        "badge": null,
        "badgeVariant": "warning",
        "keyboardShortcutChar": "P"
    }, {
        "id": "settings",
        "name": "Configurações",
        "singularName": null,
        "route": "/settings",
        "icon": "Cog",
        "inQuickCreate": false,
        "quickCreateRoute": null,
        "quickCreateName": null,
        "position": 100,
        "badge": null,
        "badgeVariant": "warning",
        "keyboardShortcutChar": null
    }],
    "highlights": [{
        "count": 0,
        "name": "Atividades de hoje",
        "route": {
            "name": "activity-index",
            "query": {
                "filter_id": 12
            }
        },
        "bgColorClass": "bg-warning-500"
    }, {
        "count": 1,
        "name": "Negócios abertos",
        "route": {
            "name": "deal-index",
            "query": {
                "filter_id": 10
            }
        },
        "bgColorClass": "bg-info-500"
    }],
    "notifications_information": [{
        "key": "document-viewed",
        "name": "Document Viewed",
        "description": null,
        "channels": ["database", "mail"]
    }, {
        "key": "user-assigned-to-activity",
        "name": "User Assigned To Activity",
        "description": null,
        "channels": ["database", "mail"]
    }, {
        "key": "user-attends-to-activity",
        "name": "User Attends To Activity",
        "description": null,
        "channels": ["database", "mail"]
    }, {
        "key": "user-assigned-to-deal",
        "name": "User Assigned To Deal",
        "description": null,
        "channels": ["database", "mail"]
    }, {
        "key": "user-assigned-to-document",
        "name": "User Assigned To Document",
        "description": null,
        "channels": ["database", "mail"]
    }, {
        "key": "user-assigned-to-company",
        "name": "User Assigned To Company",
        "description": null,
        "channels": ["database", "mail"]
    }, {
        "key": "user-assigned-to-contact",
        "name": "User Assigned To Contact",
        "description": null,
        "channels": ["database", "mail"]
    }, {
        "key": "user-mentioned",
        "name": "User Mentioned",
        "description": null,
        "channels": ["database", "mail"]
    }, {
        "key": "activity-reminder",
        "name": "Activity Reminder",
        "description": null,
        "channels": ["database", "mail"]
    }, {
        "key": "document-accepted",
        "name": "Document Accepted",
        "description": null,
        "channels": ["database", "mail"]
    }, {
        "key": "signer-signed-document",
        "name": "Signer Signed Document",
        "description": null,
        "channels": ["database", "mail"]
    }],
    "users": [{
        "id": 1,
        "name": "Taffarel Xavier",
        "email": "taffarelxavier7@gmail.com",
        "timezone": "America/Araguaina",
        "mail_signature": "",
        "super_admin": true,
        "access_api": true,
        "locale": "pt_BR",
        "avatar": null,
        "uploaded_avatar_url": null,
        "avatar_url": "https://www.gravatar.com/avatar/1151618cbd96d05de92d7534ae613a3c?s=40",
        "time_format": "H:i",
        "date_format": "F j, Y",
        "first_day_of_week": 0,
        "dashboards": [{
            "id": 1,
            "name": "Application Dashboard",
            "is_default": false,
            "cards": [],
            "user_id": 1,
            "created_at": "2023-04-21T15:24:48.000000Z",
            "updated_at": "2023-04-21T23:43:23.000000Z",
            "authorizations": {
                "view": true,
                "update": true,
                "delete": true
            },
            "was_recently_created": false
        }],
        "notifications": {
            "latest": [],
            "unread_count": 0,
            "settings": [{
                "key": "document-viewed",
                "name": "Document Viewed",
                "description": null,
                "channels": ["database", "mail"],
                "availability": {
                    "database": true,
                    "mail": true
                }
            }, {
                "key": "user-assigned-to-activity",
                "name": "User Assigned To Activity",
                "description": null,
                "channels": ["database", "mail"],
                "availability": {
                    "database": true,
                    "mail": true
                }
            }, {
                "key": "user-attends-to-activity",
                "name": "User Attends To Activity",
                "description": null,
                "channels": ["database", "mail"],
                "availability": {
                    "database": true,
                    "mail": true
                }
            }, {
                "key": "user-assigned-to-deal",
                "name": "User Assigned To Deal",
                "description": null,
                "channels": ["database", "mail"],
                "availability": {
                    "database": true,
                    "mail": true
                }
            }, {
                "key": "user-assigned-to-document",
                "name": "User Assigned To Document",
                "description": null,
                "channels": ["database", "mail"],
                "availability": {
                    "database": true,
                    "mail": true
                }
            }, {
                "key": "user-assigned-to-company",
                "name": "User Assigned To Company",
                "description": null,
                "channels": ["database", "mail"],
                "availability": {
                    "database": true,
                    "mail": true
                }
            }, {
                "key": "user-assigned-to-contact",
                "name": "User Assigned To Contact",
                "description": null,
                "channels": ["database", "mail"],
                "availability": {
                    "database": true,
                    "mail": true
                }
            }, {
                "key": "user-mentioned",
                "name": "User Mentioned",
                "description": null,
                "channels": ["database", "mail"],
                "availability": {
                    "database": true,
                    "mail": true
                }
            }, {
                "key": "activity-reminder",
                "name": "Activity Reminder",
                "description": null,
                "channels": ["database", "mail"],
                "availability": {
                    "database": true,
                    "mail": true
                }
            }, {
                "key": "document-accepted",
                "name": "Document Accepted",
                "description": null,
                "channels": ["database", "mail"],
                "availability": {
                    "database": true,
                    "mail": true
                }
            }, {
                "key": "signer-signed-document",
                "name": "Signer Signed Document",
                "description": null,
                "channels": ["database", "mail"],
                "availability": {
                    "database": true,
                    "mail": true
                }
            }]
        },
        "permissions": [],
        "roles": [],
        "gate": {
            "access-api": true,
            "is-super-admin": true
        },
        "created_at": "2023-04-21T15:24:48.000000Z",
        "updated_at": "2023-04-29T02:04:02.000000Z",
        "authorizations": {
            "viewAny": true,
            "view": true,
            "create": true,
            "update": true,
            "delete": true
        },
        "was_recently_created": false,
        "guest_email": "taffarelxavier7@gmail.com",
        "guest_display_name": "Taffarel Xavier"
    }, {
        "id": 2,
        "name": "Iara Brito 1",
        "email": "admin@gmail.com",
        "timezone": "America/Araguaina",
        "mail_signature": "",
        "super_admin": true,
        "access_api": true,
        "locale": "pt_BR",
        "avatar": null,
        "uploaded_avatar_url": null,
        "avatar_url": "https://www.gravatar.com/avatar/75d23af433e0cea4c0e45a56dba18b30?s=40",
        "time_format": "H:i",
        "date_format": "F j, Y",
        "first_day_of_week": 0,
        "notifications": {
            "settings": [{
                "key": "document-viewed",
                "name": "Document Viewed",
                "description": null,
                "channels": ["database", "mail"],
                "availability": {
                    "database": true,
                    "mail": true
                }
            }, {
                "key": "user-assigned-to-activity",
                "name": "User Assigned To Activity",
                "description": null,
                "channels": ["database", "mail"],
                "availability": {
                    "database": true,
                    "mail": true
                }
            }, {
                "key": "user-attends-to-activity",
                "name": "User Attends To Activity",
                "description": null,
                "channels": ["database", "mail"],
                "availability": {
                    "database": true,
                    "mail": true
                }
            }, {
                "key": "user-assigned-to-deal",
                "name": "User Assigned To Deal",
                "description": null,
                "channels": ["database", "mail"],
                "availability": {
                    "database": true,
                    "mail": true
                }
            }, {
                "key": "user-assigned-to-document",
                "name": "User Assigned To Document",
                "description": null,
                "channels": ["database", "mail"],
                "availability": {
                    "database": true,
                    "mail": true
                }
            }, {
                "key": "user-assigned-to-company",
                "name": "User Assigned To Company",
                "description": null,
                "channels": ["database", "mail"],
                "availability": {
                    "database": true,
                    "mail": true
                }
            }, {
                "key": "user-assigned-to-contact",
                "name": "User Assigned To Contact",
                "description": null,
                "channels": ["database", "mail"],
                "availability": {
                    "database": true,
                    "mail": true
                }
            }, {
                "key": "user-mentioned",
                "name": "User Mentioned",
                "description": null,
                "channels": ["database", "mail"],
                "availability": {
                    "database": true,
                    "mail": true
                }
            }, {
                "key": "activity-reminder",
                "name": "Activity Reminder",
                "description": null,
                "channels": ["database", "mail"],
                "availability": {
                    "database": true,
                    "mail": true
                }
            }, {
                "key": "document-accepted",
                "name": "Document Accepted",
                "description": null,
                "channels": ["database", "mail"],
                "availability": {
                    "database": true,
                    "mail": true
                }
            }, {
                "key": "signer-signed-document",
                "name": "Signer Signed Document",
                "description": null,
                "channels": ["database", "mail"],
                "availability": {
                    "database": true,
                    "mail": true
                }
            }]
        },
        "roles": [],
        "gate": {
            "access-api": true,
            "is-super-admin": true
        },
        "created_at": "2023-04-21T15:24:48.000000Z",
        "updated_at": "2023-04-27T19:31:24.000000Z",
        "authorizations": {
            "viewAny": true,
            "view": true,
            "create": true,
            "update": true,
            "delete": true
        },
        "was_recently_created": false,
        "guest_email": "admin@gmail.com",
        "guest_display_name": "Iara Brito 1"
    }, {
        "id": 3,
        "name": "Iara Brito 123",
        "email": "telefonista1@gmail.com",
        "timezone": "America/Araguaina",
        "mail_signature": "",
        "super_admin": false,
        "access_api": false,
        "locale": "pt_BR",
        "avatar": null,
        "uploaded_avatar_url": null,
        "avatar_url": "https://www.gravatar.com/avatar/79d42f1c59c09d94a0dd42637bb6537b?s=40",
        "time_format": "H:i",
        "date_format": "d/m/Y",
        "first_day_of_week": 0,
        "notifications": {
            "settings": [{
                "key": "document-viewed",
                "name": "Document Viewed",
                "description": null,
                "channels": ["database", "mail"],
                "availability": {
                    "database": true,
                    "mail": true
                }
            }, {
                "key": "user-assigned-to-activity",
                "name": "User Assigned To Activity",
                "description": null,
                "channels": ["database", "mail"],
                "availability": {
                    "database": true,
                    "mail": true
                }
            }, {
                "key": "user-attends-to-activity",
                "name": "User Attends To Activity",
                "description": null,
                "channels": ["database", "mail"],
                "availability": {
                    "database": true,
                    "mail": true
                }
            }, {
                "key": "user-assigned-to-deal",
                "name": "User Assigned To Deal",
                "description": null,
                "channels": ["database", "mail"],
                "availability": {
                    "database": true,
                    "mail": true
                }
            }, {
                "key": "user-assigned-to-document",
                "name": "User Assigned To Document",
                "description": null,
                "channels": ["database", "mail"],
                "availability": {
                    "database": true,
                    "mail": true
                }
            }, {
                "key": "user-assigned-to-company",
                "name": "User Assigned To Company",
                "description": null,
                "channels": ["database", "mail"],
                "availability": {
                    "database": true,
                    "mail": true
                }
            }, {
                "key": "user-assigned-to-contact",
                "name": "User Assigned To Contact",
                "description": null,
                "channels": ["database", "mail"],
                "availability": {
                    "database": true,
                    "mail": true
                }
            }, {
                "key": "user-mentioned",
                "name": "User Mentioned",
                "description": null,
                "channels": ["database", "mail"],
                "availability": {
                    "database": true,
                    "mail": true
                }
            }, {
                "key": "activity-reminder",
                "name": "Activity Reminder",
                "description": null,
                "channels": ["database", "mail"],
                "availability": {
                    "database": true,
                    "mail": true
                }
            }, {
                "key": "document-accepted",
                "name": "Document Accepted",
                "description": null,
                "channels": ["database", "mail"],
                "availability": {
                    "database": true,
                    "mail": true
                }
            }, {
                "key": "signer-signed-document",
                "name": "Signer Signed Document",
                "description": null,
                "channels": ["database", "mail"],
                "availability": {
                    "database": true,
                    "mail": true
                }
            }]
        },
        "roles": [{
            "id": 1,
            "name": "Telefonista",
            "permissions": [{
                "id": 1,
                "name": "view own contacts",
                "role_id": 1,
                "created_at": "2023-04-21T23:43:36.000000Z",
                "updated_at": "2023-04-21T23:43:36.000000Z",
                "was_recently_created": false
            }, {
                "id": 4,
                "name": "edit own contacts",
                "role_id": 1,
                "created_at": "2023-04-21T23:43:36.000000Z",
                "updated_at": "2023-04-21T23:43:36.000000Z",
                "was_recently_created": false
            }, {
                "id": 7,
                "name": "delete own contacts",
                "role_id": 1,
                "created_at": "2023-04-21T23:43:36.000000Z",
                "updated_at": "2023-04-21T23:43:36.000000Z",
                "was_recently_created": false
            }, {
                "id": 12,
                "name": "view own companies",
                "role_id": 1,
                "created_at": "2023-04-21T23:43:36.000000Z",
                "updated_at": "2023-04-21T23:43:36.000000Z",
                "was_recently_created": false
            }, {
                "id": 15,
                "name": "edit own companies",
                "role_id": 1,
                "created_at": "2023-04-21T23:43:36.000000Z",
                "updated_at": "2023-04-21T23:43:36.000000Z",
                "was_recently_created": false
            }, {
                "id": 18,
                "name": "delete own companies",
                "role_id": 1,
                "created_at": "2023-04-21T23:43:36.000000Z",
                "updated_at": "2023-04-21T23:43:36.000000Z",
                "was_recently_created": false
            }, {
                "id": 23,
                "name": "view own products",
                "role_id": 1,
                "created_at": "2023-04-21T23:43:36.000000Z",
                "updated_at": "2023-04-21T23:43:36.000000Z",
                "was_recently_created": false
            }, {
                "id": 26,
                "name": "edit own products",
                "role_id": 1,
                "created_at": "2023-04-21T23:43:36.000000Z",
                "updated_at": "2023-04-21T23:43:36.000000Z",
                "was_recently_created": false
            }, {
                "id": 29,
                "name": "delete own products",
                "role_id": 1,
                "created_at": "2023-04-21T23:43:36.000000Z",
                "updated_at": "2023-04-21T23:43:36.000000Z",
                "was_recently_created": false
            }, {
                "id": 34,
                "name": "view own documents",
                "role_id": 1,
                "created_at": "2023-04-21T23:43:36.000000Z",
                "updated_at": "2023-04-21T23:43:36.000000Z",
                "was_recently_created": false
            }, {
                "id": 37,
                "name": "edit own documents",
                "role_id": 1,
                "created_at": "2023-04-21T23:43:36.000000Z",
                "updated_at": "2023-04-21T23:43:36.000000Z",
                "was_recently_created": false
            }, {
                "id": 40,
                "name": "delete own documents",
                "role_id": 1,
                "created_at": "2023-04-21T23:43:36.000000Z",
                "updated_at": "2023-04-21T23:43:36.000000Z",
                "was_recently_created": false
            }, {
                "id": 44,
                "name": "view own activities",
                "role_id": 1,
                "created_at": "2023-04-21T23:43:36.000000Z",
                "updated_at": "2023-04-21T23:43:36.000000Z",
                "was_recently_created": false
            }, {
                "id": 48,
                "name": "edit own activities",
                "role_id": 1,
                "created_at": "2023-04-21T23:43:36.000000Z",
                "updated_at": "2023-04-21T23:43:36.000000Z",
                "was_recently_created": false
            }, {
                "id": 51,
                "name": "delete own activities",
                "role_id": 1,
                "created_at": "2023-04-21T23:43:36.000000Z",
                "updated_at": "2023-04-21T23:43:36.000000Z",
                "was_recently_created": false
            }, {
                "id": 56,
                "name": "view own deals",
                "role_id": 1,
                "created_at": "2023-04-21T23:43:36.000000Z",
                "updated_at": "2023-04-21T23:43:36.000000Z",
                "was_recently_created": false
            }, {
                "id": 59,
                "name": "edit own deals",
                "role_id": 1,
                "created_at": "2023-04-21T23:43:36.000000Z",
                "updated_at": "2023-04-21T23:43:36.000000Z",
                "was_recently_created": false
            }, {
                "id": 62,
                "name": "delete own deals",
                "role_id": 1,
                "created_at": "2023-04-21T23:43:36.000000Z",
                "updated_at": "2023-04-21T23:43:36.000000Z",
                "was_recently_created": false
            }],
            "created_at": "2023-04-21T23:43:46.000000Z",
            "updated_at": "2023-04-21T23:43:46.000000Z",
            "was_recently_created": false
        }, {
            "id": 2,
            "name": "Vendedor",
            "permissions": [{
                "id": 1,
                "name": "view own contacts",
                "role_id": 2,
                "created_at": "2023-04-21T23:43:36.000000Z",
                "updated_at": "2023-04-21T23:43:36.000000Z",
                "was_recently_created": false
            }, {
                "id": 4,
                "name": "edit own contacts",
                "role_id": 2,
                "created_at": "2023-04-21T23:43:36.000000Z",
                "updated_at": "2023-04-21T23:43:36.000000Z",
                "was_recently_created": false
            }, {
                "id": 7,
                "name": "delete own contacts",
                "role_id": 2,
                "created_at": "2023-04-21T23:43:36.000000Z",
                "updated_at": "2023-04-21T23:43:36.000000Z",
                "was_recently_created": false
            }, {
                "id": 12,
                "name": "view own companies",
                "role_id": 2,
                "created_at": "2023-04-21T23:43:36.000000Z",
                "updated_at": "2023-04-21T23:43:36.000000Z",
                "was_recently_created": false
            }, {
                "id": 15,
                "name": "edit own companies",
                "role_id": 2,
                "created_at": "2023-04-21T23:43:36.000000Z",
                "updated_at": "2023-04-21T23:43:36.000000Z",
                "was_recently_created": false
            }, {
                "id": 18,
                "name": "delete own companies",
                "role_id": 2,
                "created_at": "2023-04-21T23:43:36.000000Z",
                "updated_at": "2023-04-21T23:43:36.000000Z",
                "was_recently_created": false
            }, {
                "id": 23,
                "name": "view own products",
                "role_id": 2,
                "created_at": "2023-04-21T23:43:36.000000Z",
                "updated_at": "2023-04-21T23:43:36.000000Z",
                "was_recently_created": false
            }, {
                "id": 26,
                "name": "edit own products",
                "role_id": 2,
                "created_at": "2023-04-21T23:43:36.000000Z",
                "updated_at": "2023-04-21T23:43:36.000000Z",
                "was_recently_created": false
            }, {
                "id": 29,
                "name": "delete own products",
                "role_id": 2,
                "created_at": "2023-04-21T23:43:36.000000Z",
                "updated_at": "2023-04-21T23:43:36.000000Z",
                "was_recently_created": false
            }, {
                "id": 34,
                "name": "view own documents",
                "role_id": 2,
                "created_at": "2023-04-21T23:43:36.000000Z",
                "updated_at": "2023-04-21T23:43:36.000000Z",
                "was_recently_created": false
            }, {
                "id": 37,
                "name": "edit own documents",
                "role_id": 2,
                "created_at": "2023-04-21T23:43:36.000000Z",
                "updated_at": "2023-04-21T23:43:36.000000Z",
                "was_recently_created": false
            }, {
                "id": 40,
                "name": "delete own documents",
                "role_id": 2,
                "created_at": "2023-04-21T23:43:36.000000Z",
                "updated_at": "2023-04-21T23:43:36.000000Z",
                "was_recently_created": false
            }, {
                "id": 44,
                "name": "view own activities",
                "role_id": 2,
                "created_at": "2023-04-21T23:43:36.000000Z",
                "updated_at": "2023-04-21T23:43:36.000000Z",
                "was_recently_created": false
            }, {
                "id": 48,
                "name": "edit own activities",
                "role_id": 2,
                "created_at": "2023-04-21T23:43:36.000000Z",
                "updated_at": "2023-04-21T23:43:36.000000Z",
                "was_recently_created": false
            }, {
                "id": 51,
                "name": "delete own activities",
                "role_id": 2,
                "created_at": "2023-04-21T23:43:36.000000Z",
                "updated_at": "2023-04-21T23:43:36.000000Z",
                "was_recently_created": false
            }, {
                "id": 56,
                "name": "view own deals",
                "role_id": 2,
                "created_at": "2023-04-21T23:43:36.000000Z",
                "updated_at": "2023-04-21T23:43:36.000000Z",
                "was_recently_created": false
            }, {
                "id": 59,
                "name": "edit own deals",
                "role_id": 2,
                "created_at": "2023-04-21T23:43:36.000000Z",
                "updated_at": "2023-04-21T23:43:36.000000Z",
                "was_recently_created": false
            }, {
                "id": 62,
                "name": "delete own deals",
                "role_id": 2,
                "created_at": "2023-04-21T23:43:36.000000Z",
                "updated_at": "2023-04-21T23:43:36.000000Z",
                "was_recently_created": false
            }],
            "created_at": "2023-04-25T18:41:54.000000Z",
            "updated_at": "2023-04-25T18:41:54.000000Z",
            "was_recently_created": false
        }],
        "gate": {
            "access-api": false,
            "is-super-admin": false
        },
        "created_at": "2023-04-21T23:43:22.000000Z",
        "updated_at": "2023-04-27T19:30:49.000000Z",
        "authorizations": {
            "viewAny": true,
            "view": true,
            "create": true,
            "update": true,
            "delete": true
        },
        "was_recently_created": false,
        "guest_email": "telefonista1@gmail.com",
        "guest_display_name": "Iara Brito 123"
    }, {
        "id": 4,
        "name": "Maria José",
        "email": "telefonista2@gmail.com",
        "timezone": "America/Araguaina",
        "mail_signature": "",
        "super_admin": false,
        "access_api": false,
        "locale": "pt_BR",
        "avatar": null,
        "uploaded_avatar_url": null,
        "avatar_url": "https://www.gravatar.com/avatar/131e420068883162d012063d285bec43?s=40",
        "time_format": "H:i",
        "date_format": "d/m/Y",
        "first_day_of_week": 0,
        "notifications": {
            "settings": [{
                "key": "document-viewed",
                "name": "Document Viewed",
                "description": null,
                "channels": ["database", "mail"],
                "availability": {
                    "database": true,
                    "mail": true
                }
            }, {
                "key": "user-assigned-to-activity",
                "name": "User Assigned To Activity",
                "description": null,
                "channels": ["database", "mail"],
                "availability": {
                    "database": true,
                    "mail": true
                }
            }, {
                "key": "user-attends-to-activity",
                "name": "User Attends To Activity",
                "description": null,
                "channels": ["database", "mail"],
                "availability": {
                    "database": true,
                    "mail": true
                }
            }, {
                "key": "user-assigned-to-deal",
                "name": "User Assigned To Deal",
                "description": null,
                "channels": ["database", "mail"],
                "availability": {
                    "database": true,
                    "mail": true
                }
            }, {
                "key": "user-assigned-to-document",
                "name": "User Assigned To Document",
                "description": null,
                "channels": ["database", "mail"],
                "availability": {
                    "database": true,
                    "mail": true
                }
            }, {
                "key": "user-assigned-to-company",
                "name": "User Assigned To Company",
                "description": null,
                "channels": ["database", "mail"],
                "availability": {
                    "database": true,
                    "mail": true
                }
            }, {
                "key": "user-assigned-to-contact",
                "name": "User Assigned To Contact",
                "description": null,
                "channels": ["database", "mail"],
                "availability": {
                    "database": true,
                    "mail": true
                }
            }, {
                "key": "user-mentioned",
                "name": "User Mentioned",
                "description": null,
                "channels": ["database", "mail"],
                "availability": {
                    "database": true,
                    "mail": true
                }
            }, {
                "key": "activity-reminder",
                "name": "Activity Reminder",
                "description": null,
                "channels": ["database", "mail"],
                "availability": {
                    "database": true,
                    "mail": true
                }
            }, {
                "key": "document-accepted",
                "name": "Document Accepted",
                "description": null,
                "channels": ["database", "mail"],
                "availability": {
                    "database": true,
                    "mail": true
                }
            }, {
                "key": "signer-signed-document",
                "name": "Signer Signed Document",
                "description": null,
                "channels": ["database", "mail"],
                "availability": {
                    "database": true,
                    "mail": true
                }
            }]
        },
        "roles": [],
        "gate": {
            "access-api": false,
            "is-super-admin": false
        },
        "created_at": "2023-04-21T23:43:22.000000Z",
        "updated_at": "2023-04-25T18:54:23.000000Z",
        "authorizations": {
            "viewAny": true,
            "view": true,
            "create": true,
            "update": true,
            "delete": true
        },
        "was_recently_created": false,
        "guest_email": "telefonista2@gmail.com",
        "guest_display_name": "Maria José"
    }],
    "deals": {
        "pipelines": [{
            "id": 1,
            "name": "Sales Pipeline",
            "user_display_order": null,
            "visibility_group": null,
            "flag": "default",
            "user_default_sort_data": null,
            "stages": [{
                "id": 1,
                "name": "Qualified To Buy",
                "win_probability": 100,
                "display_order": 1,
                "pipeline_id": 1,
                "created_at": "2023-04-21T15:24:49.000000Z",
                "updated_at": "2023-04-21T15:24:49.000000Z",
                "was_recently_created": false
            }, {
                "id": 2,
                "name": "Contact Made",
                "win_probability": 100,
                "display_order": 2,
                "pipeline_id": 1,
                "created_at": "2023-04-21T15:24:49.000000Z",
                "updated_at": "2023-04-21T15:24:49.000000Z",
                "was_recently_created": false
            }, {
                "id": 3,
                "name": "Presentation Scheduled",
                "win_probability": 100,
                "display_order": 3,
                "pipeline_id": 1,
                "created_at": "2023-04-21T15:24:49.000000Z",
                "updated_at": "2023-04-21T15:24:49.000000Z",
                "was_recently_created": false
            }, {
                "id": 4,
                "name": "Proposal Made",
                "win_probability": 100,
                "display_order": 4,
                "pipeline_id": 1,
                "created_at": "2023-04-21T15:24:49.000000Z",
                "updated_at": "2023-04-21T15:24:49.000000Z",
                "was_recently_created": false
            }, {
                "id": 5,
                "name": "Appointment Scheduled",
                "win_probability": 100,
                "display_order": 5,
                "pipeline_id": 1,
                "created_at": "2023-04-21T15:24:49.000000Z",
                "updated_at": "2023-04-21T15:24:49.000000Z",
                "was_recently_created": false
            }],
            "is_primary": true,
            "created_at": "2023-04-21T15:24:49.000000Z",
            "updated_at": "2023-04-21T15:24:49.000000Z",
            "authorizations": {
                "viewAny": true,
                "view": true,
                "create": true,
                "update": true,
                "delete": true
            },
            "was_recently_created": false
        }],
        "lost_reasons": []
    },
    "activities": {
        "default_activity_type_id": 3,
        "types": [{
            "id": 1,
            "name": "Call",
            "swatch_color": "#a3e635",
            "is_primary": true,
            "created_at": "2023-04-21T15:24:49.000000Z",
            "updated_at": "2023-04-21T15:24:49.000000Z",
            "authorizations": {
                "viewAny": true,
                "view": true,
                "create": true,
                "update": true,
                "delete": true
            },
            "was_recently_created": false,
            "icon": "Phone"
        }, {
            "id": 5,
            "name": "Deadline",
            "swatch_color": "#f43f5e",
            "is_primary": true,
            "created_at": "2023-04-21T15:24:49.000000Z",
            "updated_at": "2023-04-21T15:24:49.000000Z",
            "authorizations": {
                "viewAny": true,
                "view": true,
                "create": true,
                "update": true,
                "delete": true
            },
            "was_recently_created": false,
            "icon": "Clock"
        }, {
            "id": 4,
            "name": "Email",
            "swatch_color": "#818cf8",
            "is_primary": true,
            "created_at": "2023-04-21T15:24:49.000000Z",
            "updated_at": "2023-04-21T15:24:49.000000Z",
            "authorizations": {
                "viewAny": true,
                "view": true,
                "create": true,
                "update": true,
                "delete": true
            },
            "was_recently_created": false,
            "icon": "Mail"
        }, {
            "id": 2,
            "name": "Meeting",
            "swatch_color": "#64748b",
            "is_primary": true,
            "created_at": "2023-04-21T15:24:49.000000Z",
            "updated_at": "2023-04-21T15:24:49.000000Z",
            "authorizations": {
                "viewAny": true,
                "view": true,
                "create": true,
                "update": true,
                "delete": true
            },
            "was_recently_created": false,
            "icon": "Users"
        }, {
            "id": 3,
            "name": "Task",
            "swatch_color": "#ffd600",
            "is_primary": true,
            "created_at": "2023-04-21T15:24:49.000000Z",
            "updated_at": "2023-04-21T15:24:49.000000Z",
            "authorizations": {
                "viewAny": true,
                "view": true,
                "create": true,
                "update": true,
                "delete": true
            },
            "was_recently_created": false,
            "icon": "CheckCircle"
        }]
    },
    "calls": {
        "outcomes": [{
            "id": 2,
            "name": "Busy",
            "swatch_color": "#f43f5e",
            "created_at": "2023-04-21T15:24:49.000000Z",
            "updated_at": "2023-04-21T15:24:49.000000Z",
            "authorizations": {
                "viewAny": true,
                "view": true,
                "create": true,
                "update": true,
                "delete": true
            },
            "was_recently_created": false
        }, {
            "id": 5,
            "name": "Left voice message",
            "swatch_color": "#ffd600",
            "created_at": "2023-04-21T15:24:49.000000Z",
            "updated_at": "2023-04-21T15:24:49.000000Z",
            "authorizations": {
                "viewAny": true,
                "view": true,
                "create": true,
                "update": true,
                "delete": true
            },
            "was_recently_created": false
        }, {
            "id": 6,
            "name": "Moved conversation forward",
            "swatch_color": "#a3e635",
            "created_at": "2023-04-21T15:24:49.000000Z",
            "updated_at": "2023-04-21T15:24:49.000000Z",
            "authorizations": {
                "viewAny": true,
                "view": true,
                "create": true,
                "update": true,
                "delete": true
            },
            "was_recently_created": false
        }, {
            "id": 1,
            "name": "No Answer",
            "swatch_color": "#f43f5e",
            "created_at": "2023-04-21T15:24:49.000000Z",
            "updated_at": "2023-04-21T15:24:49.000000Z",
            "authorizations": {
                "viewAny": true,
                "view": true,
                "create": true,
                "update": true,
                "delete": true
            },
            "was_recently_created": false
        }, {
            "id": 4,
            "name": "Unavailable",
            "swatch_color": "#8898aa",
            "created_at": "2023-04-21T15:24:49.000000Z",
            "updated_at": "2023-04-21T15:24:49.000000Z",
            "authorizations": {
                "viewAny": true,
                "view": true,
                "create": true,
                "update": true,
                "delete": true
            },
            "was_recently_created": false
        }, {
            "id": 3,
            "name": "Wrong Number",
            "swatch_color": "#8898aa",
            "created_at": "2023-04-21T15:24:49.000000Z",
            "updated_at": "2023-04-21T15:24:49.000000Z",
            "authorizations": {
                "viewAny": true,
                "view": true,
                "create": true,
                "update": true,
                "delete": true
            },
            "was_recently_created": false
        }]
    },
    "documents": {
        "default_document_type": 1,
        "navigation_heading_tag_name": "h1",
        "placeholders": [{
            "tag": "company_name",
            "description": null,
            "interpolation_start": "{{",
            "interpolation_end": "}}"
        }, {
            "tag": "brand_display_name",
            "description": null,
            "interpolation_start": "{{",
            "interpolation_end": "}}"
        }, {
            "tag": "brand_internal_name",
            "description": null,
            "interpolation_start": "{{",
            "interpolation_end": "}}"
        }, {
            "tag": "document_title",
            "description": "Documento - Título",
            "interpolation_start": "{{",
            "interpolation_end": "}}"
        }, {
            "tag": "document_type",
            "description": "Documento - Tipo de Documento",
            "interpolation_start": "{{",
            "interpolation_end": "}}"
        }, {
            "tag": "document_owner",
            "description": "Documento - Proprietário",
            "interpolation_start": "{{",
            "interpolation_end": "}}"
        }, {
            "tag": "document_owner_email_address",
            "description": "Documento - Endereço de Email do Proprietário",
            "interpolation_start": "{{",
            "interpolation_end": "}}"
        }, {
            "tag": "document_created_date",
            "description": "Documento - Criado em",
            "interpolation_start": "{{",
            "interpolation_end": "}}"
        }, {
            "tag": "company_name",
            "description": "Empresa - Nome",
            "interpolation_start": "{{",
            "interpolation_end": "}}"
        }, {
            "tag": "company_domain",
            "description": "Empresa - Nome do Domínio da Empresa",
            "interpolation_start": "{{",
            "interpolation_end": "}}"
        }, {
            "tag": "company_email",
            "description": "Empresa - Endereço de E-Mail",
            "interpolation_start": "{{",
            "interpolation_end": "}}"
        }, {
            "tag": "company_industry",
            "description": "Empresa - Indústria",
            "interpolation_start": "{{",
            "interpolation_end": "}}"
        }, {
            "tag": "company_phones",
            "description": "Empresa - Telefone",
            "interpolation_start": "{{",
            "interpolation_end": "}}"
        }, {
            "tag": "company_source",
            "description": "Empresa - Fonte",
            "interpolation_start": "{{",
            "interpolation_end": "}}"
        }, {
            "tag": "company_parent",
            "description": "Empresa - Empresa Principal",
            "interpolation_start": "{{",
            "interpolation_end": "}}"
        }, {
            "tag": "company_street",
            "description": "Empresa - Endereço",
            "interpolation_start": "{{",
            "interpolation_end": "}}"
        }, {
            "tag": "company_city",
            "description": "Empresa - Cidade",
            "interpolation_start": "{{",
            "interpolation_end": "}}"
        }, {
            "tag": "company_state",
            "description": "Empresa - Estado/Região",
            "interpolation_start": "{{",
            "interpolation_end": "}}"
        }, {
            "tag": "company_postal_code",
            "description": "Empresa - Código Postal",
            "interpolation_start": "{{",
            "interpolation_end": "}}"
        }, {
            "tag": "company_country",
            "description": "Empresa - País",
            "interpolation_start": "{{",
            "interpolation_end": "}}"
        }, {
            "tag": "company_user",
            "description": "Empresa - Proprietário",
            "interpolation_start": "{{",
            "interpolation_end": "}}"
        }, {
            "tag": "company_owner_assigned_date",
            "description": "Empresa - Data de Atribuição ao Proprietário",
            "interpolation_start": "{{",
            "interpolation_end": "}}"
        }, {
            "tag": "company_next_activity",
            "description": "Empresa - Data da Próxima Atividade",
            "interpolation_start": "{{",
            "interpolation_end": "}}"
        }, {
            "tag": "company_updated_at",
            "description": "Empresa - Atualizado em",
            "interpolation_start": "{{",
            "interpolation_end": "}}"
        }, {
            "tag": "company_created_at",
            "description": "Empresa - Criado em",
            "interpolation_start": "{{",
            "interpolation_end": "}}"
        }, {
            "tag": "contact_display_name",
            "description": "Contato - Contato",
            "interpolation_start": "{{",
            "interpolation_end": "}}"
        }, {
            "tag": "contact_first_name",
            "description": "Contato - Primeiro Nome",
            "interpolation_start": "{{",
            "interpolation_end": "}}"
        }, {
            "tag": "contact_last_name",
            "description": "Contato - Sobrenome",
            "interpolation_start": "{{",
            "interpolation_end": "}}"
        }, {
            "tag": "contact_email",
            "description": "Contato - Endereço de E-mail",
            "interpolation_start": "{{",
            "interpolation_end": "}}"
        }, {
            "tag": "contact_phones",
            "description": "Contato - Telefone",
            "interpolation_start": "{{",
            "interpolation_end": "}}"
        }, {
            "tag": "contact_user",
            "description": "Contato - Proprietário",
            "interpolation_start": "{{",
            "interpolation_end": "}}"
        }, {
            "tag": "contact_source",
            "description": "Contato - Fonte",
            "interpolation_start": "{{",
            "interpolation_end": "}}"
        }, {
            "tag": "contact_owner_assigned_date",
            "description": "Contato - Data de Atribuição do Proprietário",
            "interpolation_start": "{{",
            "interpolation_end": "}}"
        }, {
            "tag": "contact_job_title",
            "description": "Contato - Cargo",
            "interpolation_start": "{{",
            "interpolation_end": "}}"
        }, {
            "tag": "contact_street",
            "description": "Contato - Endereço",
            "interpolation_start": "{{",
            "interpolation_end": "}}"
        }, {
            "tag": "contact_city",
            "description": "Contato - Cidade",
            "interpolation_start": "{{",
            "interpolation_end": "}}"
        }, {
            "tag": "contact_state",
            "description": "Contato - Estado/Região",
            "interpolation_start": "{{",
            "interpolation_end": "}}"
        }, {
            "tag": "contact_postal_code",
            "description": "Contato - CEP",
            "interpolation_start": "{{",
            "interpolation_end": "}}"
        }, {
            "tag": "contact_country",
            "description": "Contato - País",
            "interpolation_start": "{{",
            "interpolation_end": "}}"
        }, {
            "tag": "contact_next_activity",
            "description": "Contato - Data da Próxima Atividade",
            "interpolation_start": "{{",
            "interpolation_end": "}}"
        }, {
            "tag": "contact_updated_at",
            "description": "Contato - Atualizado em",
            "interpolation_start": "{{",
            "interpolation_end": "}}"
        }, {
            "tag": "contact_created_at",
            "description": "Contato - Criado em",
            "interpolation_start": "{{",
            "interpolation_end": "}}"
        }, {
            "tag": "deal_name",
            "description": "Negócio - Nome do Negócio",
            "interpolation_start": "{{",
            "interpolation_end": "}}"
        }, {
            "tag": "deal_pipeline",
            "description": "Negócio - Funil",
            "interpolation_start": "{{",
            "interpolation_end": "}}"
        }, {
            "tag": "deal_stage",
            "description": "Negócio - Fase",
            "interpolation_start": "{{",
            "interpolation_end": "}}"
        }, {
            "tag": "deal_amount",
            "description": "Negócio - Valor",
            "interpolation_start": "{{",
            "interpolation_end": "}}"
        }, {
            "tag": "deal_expected_close_date",
            "description": "Negócio - Data de Fechamento Esperada",
            "interpolation_start": "{{",
            "interpolation_end": "}}"
        }, {
            "tag": "deal_status",
            "description": "Negócio - Status",
            "interpolation_start": "{{",
            "interpolation_end": "}}"
        }, {
            "tag": "deal_lost_reason",
            "description": "Negócio - Motivo da Perda",
            "interpolation_start": "{{",
            "interpolation_end": "}}"
        }, {
            "tag": "deal_user",
            "description": "Negócio - Proprietário",
            "interpolation_start": "{{",
            "interpolation_end": "}}"
        }, {
            "tag": "deal_owner_assigned_date",
            "description": "Negócio - Data de Atribuição ao Proprietário",
            "interpolation_start": "{{",
            "interpolation_end": "}}"
        }, {
            "tag": "deal_next_activity",
            "description": "Negócio - Data da Próxima Atividade",
            "interpolation_start": "{{",
            "interpolation_end": "}}"
        }, {
            "tag": "deal_updated_at",
            "description": "Negócio - Atualizado em",
            "interpolation_start": "{{",
            "interpolation_end": "}}"
        }, {
            "tag": "deal_created_at",
            "description": "Negócio - Criado em",
            "interpolation_start": "{{",
            "interpolation_end": "}}"
        }],
        "statuses": {
            "draft": {
                "name": "draft",
                "icon": "LightBulb",
                "color": "#64748b"
            },
            "sent": {
                "name": "sent",
                "icon": "Mail",
                "color": "#3b82f6"
            },
            "accepted": {
                "name": "accepted",
                "icon": "Check",
                "color": "#22c55e"
            },
            "lost": {
                "name": "lost",
                "icon": "X",
                "color": "#f43f5e"
            }
        },
        "types": [{
            "id": 3,
            "name": "Contract",
            "icon": "DocumentText",
            "swatch_color": "#ffd600",
            "is_primary": true,
            "created_at": "2023-04-21T15:24:50.000000Z",
            "updated_at": "2023-04-21T15:24:50.000000Z",
            "was_recently_created": false
        }, {
            "id": 1,
            "name": "Proposal",
            "icon": "DocumentText",
            "swatch_color": "#a3e635",
            "is_primary": true,
            "created_at": "2023-04-21T15:24:50.000000Z",
            "updated_at": "2023-04-21T15:24:50.000000Z",
            "was_recently_created": false
        }, {
            "id": 2,
            "name": "Quote",
            "icon": "DocumentText",
            "swatch_color": "#64748b",
            "is_primary": true,
            "created_at": "2023-04-21T15:24:50.000000Z",
            "updated_at": "2023-04-21T15:24:50.000000Z",
            "was_recently_created": false
        }]
    },
    "invitation": {
        "expires_after": 3
    },
    "soft_deletes": {
        "prune_after": 30
    },
    "contentbuilder": {
        "fonts": [{
            "font-family": "DejaVu Sans",
            "provider": ""
        }, {
            "font-family": "Helvetica",
            "provider": ""
        }, {
            "font-family": "Times",
            "provider": ""
        }, {
            "font-family": "Arial, sans-serif",
            "provider": ""
        }, {
            "font-family": "courier",
            "provider": ""
        }, {
            "font-family": "Georgia, serif",
            "provider": ""
        }, {
            "font-family": "monospace",
            "provider": ""
        }, {
            "font-family": "sans-serif",
            "provider": ""
        }, {
            "font-family": "serif",
            "provider": ""
        }, {
            "font-family": "Abel, sans-serif",
            "provider": "google"
        }, {
            "font-family": "Abril Fatface",
            "provider": "google"
        }, {
            "font-family": "Advent Pro, sans-serif",
            "provider": "google"
        }, {
            "font-family": "Aladin, cursive",
            "provider": "google"
        }, {
            "font-family": "Alegreya, serif",
            "provider": "google"
        }, {
            "font-family": "Alegreya Sans SC, sans-serif",
            "provider": "google"
        }, {
            "font-family": "Alegreya SC, serif",
            "provider": "google"
        }, {
            "font-family": "Alice, serif",
            "provider": "google"
        }, {
            "font-family": "Allerta Stencil, sans-serif",
            "provider": "google"
        }, {
            "font-family": "Allura, cursive",
            "provider": "google"
        }, {
            "font-family": "Almendra Display, cursive",
            "provider": "google"
        }, {
            "font-family": "Amatic SC, cursive",
            "provider": "google"
        }, {
            "font-family": "Andika, sans-serif",
            "provider": "google"
        }, {
            "font-family": "Anonymous Pro, monospace",
            "provider": "google"
        }, {
            "font-family": "Architects Daughter, cursive",
            "provider": "google"
        }, {
            "font-family": "Arimo, sans-serif",
            "provider": "google"
        }, {
            "font-family": "Arsenal, sans-serif",
            "provider": "google"
        }, {
            "font-family": "Assistant",
            "provider": "google"
        }, {
            "font-family": "Aubrey, cursive",
            "provider": "google"
        }, {
            "font-family": "Anton, sans-serif",
            "provider": "google"
        }, {
            "font-family": "Archivo Narrow, sans-serif",
            "provider": "google"
        }, {
            "font-family": "Bad Script, cursive",
            "provider": "google"
        }, {
            "font-family": "BenchNine, sans-serif",
            "provider": "google"
        }, {
            "font-family": "Bevan, cursive",
            "provider": "google"
        }, {
            "font-family": "Bigelow Rules, cursive",
            "provider": "google"
        }, {
            "font-family": "Bilbo, cursive",
            "provider": "google"
        }, {
            "font-family": "Bonbon, cursive",
            "provider": "google"
        }, {
            "font-family": "Bowlby One SC, cursive",
            "provider": "google"
        }, {
            "font-family": "Cabin Condensed, sans-serif",
            "provider": "google"
        }, {
            "font-family": "Carrois Gothic SC, sans-serif",
            "provider": "google"
        }, {
            "font-family": "Caveat, cursive",
            "provider": "google"
        }, {
            "font-family": "Chewy, cursive",
            "provider": "google"
        }, {
            "font-family": "Cinzel, serif",
            "provider": "google"
        }, {
            "font-family": "Comfortaa, cursive",
            "provider": "google"
        }, {
            "font-family": "Concert One, cursive",
            "provider": "google"
        }, {
            "font-family": "Cormorant, serif",
            "provider": "google"
        }, {
            "font-family": "Cormorant Garamond, serif",
            "provider": "google"
        }, {
            "font-family": "Cormorant Infant, serif",
            "provider": "google"
        }, {
            "font-family": "Cormorant SC, serif",
            "provider": "google"
        }, {
            "font-family": "Cormorant Unicase, serif",
            "provider": "google"
        }, {
            "font-family": "Cousine",
            "provider": "google"
        }, {
            "font-family": "Crafty Girls, cursive",
            "provider": "google"
        }, {
            "font-family": "Cuprum, sans-serif",
            "provider": "google"
        }, {
            "font-family": "Cutive Mono, monospace",
            "provider": "google"
        }, {
            "font-family": "Devonshire, cursive",
            "provider": "google"
        }, {
            "font-family": "Didact Gothic, sans-serif",
            "provider": "google"
        }, {
            "font-family": "Diplomata SC, cursive",
            "provider": "google"
        }, {
            "font-family": "Dosis, sans-serif",
            "provider": "google"
        }, {
            "font-family": "EB Garamond, serif",
            "provider": "google"
        }, {
            "font-family": "El Messiri, sans-serif",
            "provider": "google"
        }, {
            "font-family": "Elsie, cursive",
            "provider": "google"
        }, {
            "font-family": "Encode Sans, sans-serif",
            "provider": "google"
        }, {
            "font-family": "Exo, sans-serif",
            "provider": "google"
        }, {
            "font-family": "'Exo 2', sans-serif",
            "provider": "google"
        }, {
            "font-family": "Felipa, cursive",
            "provider": "google"
        }, {
            "font-family": "Fira Code, monospace",
            "provider": "google"
        }, {
            "font-family": "Fira Mono, monospace",
            "provider": "google"
        }, {
            "font-family": "Fira Sans, sans-serif",
            "provider": "google"
        }, {
            "font-family": "Fira Sans Condensed, sans-serif",
            "provider": "google"
        }, {
            "font-family": "Fira Sans Extra Condensed, sans-serif",
            "provider": "google"
        }, {
            "font-family": "Fjalla One, sans-serif",
            "provider": "google"
        }, {
            "font-family": "Forum, cursive",
            "provider": "google"
        }, {
            "font-family": "Frank Ruhl Libre",
            "provider": "google"
        }, {
            "font-family": "Fredericka the Great, cursive",
            "provider": "google"
        }, {
            "font-family": "Gabriela, serif",
            "provider": "google"
        }, {
            "font-family": "Gilda Display, serif",
            "provider": "google"
        }, {
            "font-family": "Give You Glory, cursive",
            "provider": "google"
        }, {
            "font-family": "Gruppo, cursive",
            "provider": "google"
        }, {
            "font-family": "Handlee, cursive",
            "provider": "google"
        }, {
            "font-family": "Happy Monkey, cursive",
            "provider": "google"
        }, {
            "font-family": "Hind",
            "provider": "google"
        }, {
            "font-family": "IBM Plex Mono, monospace",
            "provider": "google"
        }, {
            "font-family": "IBM Plex Sans, sans-serif",
            "provider": "google"
        }, {
            "font-family": "IBM Plex Serif, serif",
            "provider": "google"
        }, {
            "font-family": "Iceland, cursive",
            "provider": "google"
        }, {
            "font-family": "Inconsolata, monospace",
            "provider": "google"
        }, {
            "font-family": "Josefin Sans, sans-serif",
            "provider": "google"
        }, {
            "font-family": "Istok Web, sans-serif",
            "provider": "google"
        }, {
            "font-family": "Julee, cursive",
            "provider": "google"
        }, {
            "font-family": "Julius Sans One, sans-serif",
            "provider": "google"
        }, {
            "font-family": "Junge, serif",
            "provider": "google"
        }, {
            "font-family": "Jura, sans-serif",
            "provider": "google"
        }, {
            "font-family": "Just Me Again Down Here, cursive",
            "provider": "google"
        }, {
            "font-family": "Kaushan Script, cursive",
            "provider": "google"
        }, {
            "font-family": "Kelly Slab, cursive",
            "provider": "google"
        }, {
            "font-family": "Kite One, sans-serif",
            "provider": "google"
        }, {
            "font-family": "Kosugi, sans-serif",
            "provider": "google"
        }, {
            "font-family": "Kosugi Maru, sans-serif",
            "provider": "google"
        }, {
            "font-family": "Kurale, serif",
            "provider": "google"
        }, {
            "font-family": "Lato, sans-serif",
            "provider": "google"
        }, {
            "font-family": "Ledger, serif",
            "provider": "google"
        }, {
            "font-family": "Lekton, sans-serif",
            "provider": "google"
        }, {
            "font-family": "Life Savers, cursive",
            "provider": "google"
        }, {
            "font-family": "Literata, serif",
            "provider": "google"
        }, {
            "font-family": "Lobster, cursive",
            "provider": "google"
        }, {
            "font-family": "Lobster Two, cursive",
            "provider": "google"
        }, {
            "font-family": "Londrina Shadow, cursive",
            "provider": "google"
        }, {
            "font-family": "Lora, serif",
            "provider": "google"
        }, {
            "font-family": "Lovers Quarrel, cursive",
            "provider": "google"
        }, {
            "font-family": "'M PLUS 1p', sans-serif",
            "provider": "google"
        }, {
            "font-family": "'M PLUS Rounded 1c', sans-serif",
            "provider": "google"
        }, {
            "font-family": "Macondo, cursive",
            "provider": "google"
        }, {
            "font-family": "Marcellus SC, serif",
            "provider": "google"
        }, {
            "font-family": "Marck Script, cursive",
            "provider": "google"
        }, {
            "font-family": "Martel, serif",
            "provider": "google"
        }, {
            "font-family": "Maven Pro, sans-serif",
            "provider": "google"
        }, {
            "font-family": "Merriweather, serif",
            "provider": "google"
        }, {
            "font-family": "Merriweather Sans",
            "provider": "google"
        }, {
            "font-family": "Mogra, cursive",
            "provider": "google"
        }, {
            "font-family": "Monoton, cursive",
            "provider": "google"
        }, {
            "font-family": "Montez, cursive",
            "provider": "google"
        }, {
            "font-family": "Montserrat, sans-serif",
            "provider": "google"
        }, {
            "font-family": "Montserrat Alternates, sans-serif",
            "provider": "google"
        }, {
            "font-family": "Montserrat Subrayada, sans-serif",
            "provider": "google"
        }, {
            "font-family": "Neucha, cursive",
            "provider": "google"
        }, {
            "font-family": "Neuton, serif",
            "provider": "google"
        }, {
            "font-family": "Nixie One, cursive",
            "provider": "google"
        }, {
            "font-family": "Nothing You Could Do, cursive",
            "provider": "google"
        }, {
            "font-family": "Noto Sans, sans-serif",
            "provider": "google"
        }, {
            "font-family": "Noto Sans SC, sans-serif",
            "provider": "google"
        }, {
            "font-family": "Noto Serif, serif",
            "provider": "google"
        }, {
            "font-family": "Noto Serif TC, serif",
            "provider": "google"
        }, {
            "font-family": "Nunito, sans-serif",
            "provider": "google"
        }, {
            "font-family": "Old Standard TT, serif",
            "provider": "google"
        }, {
            "font-family": "Open Sans, sans-serif",
            "provider": "google"
        }, {
            "font-family": "Oranienbaum, serif",
            "provider": "google"
        }, {
            "font-family": "Oswald, sans-serif",
            "provider": "google"
        }, {
            "font-family": "Oxygen, sans-serif",
            "provider": "google"
        }, {
            "font-family": "Pacifico, cursive",
            "provider": "google"
        }, {
            "font-family": "Pangolin, cursive",
            "provider": "google"
        }, {
            "font-family": "Passion One, cursive",
            "provider": "google"
        }, {
            "font-family": "Pathway Gothic One, sans-serif",
            "provider": "google"
        }, {
            "font-family": "Pattaya, sans-serif",
            "provider": "google"
        }, {
            "font-family": "Petit Formal Script, cursive",
            "provider": "google"
        }, {
            "font-family": "Philosopher, sans-serif",
            "provider": "google"
        }, {
            "font-family": "Play, sans-serif",
            "provider": "google"
        }, {
            "font-family": "Playfair Display, serif",
            "provider": "google"
        }, {
            "font-family": "Playfair Display SC, serif",
            "provider": "google"
        }, {
            "font-family": "Podkova, serif",
            "provider": "google"
        }, {
            "font-family": "Poiret One, cursive",
            "provider": "google"
        }, {
            "font-family": "Pompiere, cursive",
            "provider": "google"
        }, {
            "font-family": "Poppins, sans-serif",
            "provider": "google"
        }, {
            "font-family": "Prata, serif",
            "provider": "google"
        }, {
            "font-family": "'Press Start 2P', cursive",
            "provider": "google"
        }, {
            "font-family": "Prosto One, cursive",
            "provider": "google"
        }, {
            "font-family": "PT Mono, monospace",
            "provider": "google"
        }, {
            "font-family": "PT Sans, sans-serif",
            "provider": "google"
        }, {
            "font-family": "PT Sans Caption, sans-serif",
            "provider": "google"
        }, {
            "font-family": "PT Sans Narrow, sans-serif",
            "provider": "google"
        }, {
            "font-family": "PT Serif, serif",
            "provider": "google"
        }, {
            "font-family": "PT Serif Caption, serif",
            "provider": "google"
        }, {
            "font-family": "Quattrocento Sans, sans-serif",
            "provider": "google"
        }, {
            "font-family": "Quattrocento, serif",
            "provider": "google"
        }, {
            "font-family": "Quicksand, sans-serif",
            "provider": "google"
        }, {
            "font-family": "Qwigley, cursive",
            "provider": "google"
        }, {
            "font-family": "Raleway, sans-serif",
            "provider": "google"
        }, {
            "font-family": "Raleway Dots, sans-serif",
            "provider": "google"
        }, {
            "font-family": "Redressed, cursive",
            "provider": "google"
        }, {
            "font-family": "Ribeye Marrow, cursive",
            "provider": "google"
        }, {
            "font-family": "Righteous, cursive",
            "provider": "google"
        }, {
            "font-family": "Roboto, sans-serif",
            "provider": "google"
        }, {
            "font-family": "Roboto Condensed, sans-serif",
            "provider": "google"
        }, {
            "font-family": "Roboto Mono, monospace",
            "provider": "google"
        }, {
            "font-family": "Roboto Slab, serif",
            "provider": "google"
        }, {
            "font-family": "Rochester, cursive",
            "provider": "google"
        }, {
            "font-family": "Rouge Script, cursive",
            "provider": "google"
        }, {
            "font-family": "Rubik, sans-serif",
            "provider": "google"
        }, {
            "font-family": "Rubik Mono One, sans-serif",
            "provider": "google"
        }, {
            "font-family": "Ruslan Display, cursive",
            "provider": "google"
        }, {
            "font-family": "Russo One, sans-serif",
            "provider": "google"
        }, {
            "font-family": "Sacramento, cursive",
            "provider": "google"
        }, {
            "font-family": "Sanchez, serif",
            "provider": "google"
        }, {
            "font-family": "Satisfy, cursive",
            "provider": "google"
        }, {
            "font-family": "Sawarabi Gothic, sans-serif",
            "provider": "google"
        }, {
            "font-family": "Scada, sans-serif",
            "provider": "google"
        }, {
            "font-family": "Seaweed Script, cursive",
            "provider": "google"
        }, {
            "font-family": "Seymour One, sans-serif",
            "provider": "google"
        }, {
            "font-family": "Shadows Into Light Two, cursive",
            "provider": "google"
        }, {
            "font-family": "Six Caps, sans-serif",
            "provider": "google"
        }, {
            "font-family": "Snowburst One, cursive",
            "provider": "google"
        }, {
            "font-family": "Source Code Pro, monospace",
            "provider": "google"
        }, {
            "font-family": "Source Sans Pro, sans-serif",
            "provider": "google"
        }, {
            "font-family": "Special Elite, cursive",
            "provider": "google"
        }, {
            "font-family": "Spectral, serif",
            "provider": "google"
        }, {
            "font-family": "Spectral SC, serif",
            "provider": "google"
        }, {
            "font-family": "Squada One, cursive",
            "provider": "google"
        }, {
            "font-family": "Stalinist One, cursive",
            "provider": "google"
        }, {
            "font-family": "Stint Ultra Expanded, cursive",
            "provider": "google"
        }, {
            "font-family": "Syncopate, sans-serif",
            "provider": "google"
        }, {
            "font-family": "Tangerine, cursive",
            "provider": "google"
        }, {
            "font-family": "Tenor Sans, sans-serif",
            "provider": "google"
        }, {
            "font-family": "Tinos, serif",
            "provider": "google"
        }, {
            "font-family": "Ubuntu, sans-serif",
            "provider": "google"
        }, {
            "font-family": "Ubuntu Condensed, sans-serif",
            "provider": "google"
        }, {
            "font-family": "Ubuntu Mono, monospace",
            "provider": "google"
        }, {
            "font-family": "Underdog, cursive",
            "provider": "google"
        }, {
            "font-family": "UnifrakturMaguntia, cursive",
            "provider": "google"
        }, {
            "font-family": "Vast Shadow, cursive",
            "provider": "google"
        }, {
            "font-family": "Viga, sans-serif",
            "provider": "google"
        }, {
            "font-family": "Vollkorn, serif",
            "provider": "google"
        }, {
            "font-family": "Vollkorn SC, serif",
            "provider": "google"
        }, {
            "font-family": "Voltaire, sans-serif",
            "provider": "google"
        }, {
            "font-family": "Wire One, sans-serif",
            "provider": "google"
        }, {
            "font-family": "Yanone Kaffeesatz, sans-serif",
            "provider": "google"
        }, {
            "font-family": "Yeseva One, cursive",
            "provider": "google"
        }]
    },
    "microsoft": {
        "client_id": null
    },
    "google": {
        "client_id": null
    },
    "voip": {
        "client": null,
        "endpoints": {
            "call": "http://localhost:8000/api/voip/call",
            "events": "http://localhost:8000/api/voip/events"
        }
    },
    "defaults": {
        "hour": 8,
        "minutes": 0,
        "reminder_minutes": 30
    },
    "favourite_colors": ["#374151", "#DC2626", "#F59E0B", "#10B981", "#2563EB", "#4F46E5", "#7C3AED", "#EC4899", "#F3F4F6"],
    "requirements": {
        "imap": true,
        "zip": true
    },
    "mail": {
        "reply_prefix": "RE: ",
        "forward_prefix": "FW: ",
        "accounts": {
            "connections": ["Gmail", "Outlook", "Imap"],
            "encryptions": ["ssl", "tls", "starttls"],
            "from_name": "{agent} from {company}"
        },
        "folders": {
            "outgoing": ["sent", "drafts"],
            "incoming": ["inbox", "spam"],
            "other": "other",
            "drafts": "drafts"
        }
    },
    "associations": {
        "common": {
            "0": "sources",
            "1": "industries",
            "2": "contacts",
            "3": "companies",
            "4": "products",
            "5": "call-outcomes",
            "6": "calls",
            "7": "document-types",
            "8": "documents",
            "9": "document-templates",
            "10": "notes",
            "11": "emails",
            "12": "activity-types",
            "13": "activities",
            "14": "users",
            "15": "deals",
            "16": "lost-reasons",
            "17": "pipeline-stages",
            "18": "pipelines"
        }
    },
    "siligOptions": [{
        "id": 15,
        "title": "Logomarca",
        "type": "input",
        "input_type": null,
        "option_name": "logo",
        "option_value": "https://demo-crm-sollar.vercel.app/assets/img/primesol.png1",
        "autoload": "1"
    }, {
        "id": 16,
        "title": "Nome da Empresa",
        "type": "input",
        "input_type": null,
        "option_name": "app_name",
        "option_value": "PrimeSol asdfadfadsa",
        "autoload": "1"
    }, {
        "id": 18,
        "title": "URL base",
        "type": "input",
        "input_type": null,
        "option_name": "site_url",
        "option_value": "https://demo-crm-sollar.vercel.appad",
        "autoload": "1"
    }, {
        "id": 19,
        "title": "Arquivos Permitidos",
        "type": "input",
        "input_type": null,
        "option_name": "arquivos_permitidos",
        "option_value": "jpeg,jpg,png,pdf,doc,docx,gif",
        "autoload": "1"
    }, {
        "id": 21,
        "title": "Imagem de fundo do login",
        "type": "input",
        "input_type": null,
        "option_name": "background_login_painel",
        "option_value": "https://googlec",
        "autoload": "1"
    }, {
        "id": 29,
        "title": "Email do admin",
        "type": "input",
        "input_type": "email",
        "option_name": "email",
        "option_value": "taffarelxavier7@gmail.com",
        "autoload": "1"
    }, {
        "id": 30,
        "title": "Whatsapp do admin geral",
        "type": "input",
        "input_type": null,
        "option_name": "whatsapp_numero",
        "option_value": "63999364840",
        "autoload": "1"
    }, {
        "id": 31,
        "title": "Quantidade de Clientes Selecionados por vez",
        "type": "input",
        "input_type": "number",
        "option_name": "quantidade_clientes_selecionados",
        "option_value": "200",
        "autoload": "1"
    }, {
        "id": 32,
        "title": "Cor primária",
        "type": "input",
        "input_type": "color",
        "option_name": "primary",
        "option_value": "#000000",
        "autoload": "1"
    }, {
        "id": 33,
        "title": "Cor Segundária",
        "type": "input",
        "input_type": "color",
        "option_name": "secondary",
        "option_value": "#dc004e",
        "autoload": "1"
    }, {
        "id": 34,
        "title": "Cor em caso de erro",
        "type": "input",
        "input_type": "color",
        "option_name": "error",
        "option_value": "#ff1744",
        "autoload": "1"
    }, {
        "id": 35,
        "title": "Cor de fundo padrão",
        "type": "input",
        "input_type": "color",
        "option_name": "background_default",
        "option_value": "#ffffff",
        "autoload": "1"
    }, {
        "id": 36,
        "title": null,
        "type": "textarea",
        "input_type": null,
        "option_name": "mensagem",
        "option_value": "Olá! Como vai?\\n\\nSou {sexo} {nome}, consultor(a) e especialista da *PRIME SOL ENERGIA SOLAR*, maior empresa de Campos dos Goytacazes, no estado do Rio de Janeiro! Ao longo dos anos, somamos um número de mais *900 clientes OBTENDO ECONOMIA* com o nosso sistema de energia solar, o que nos faz ser referência no setor .\\n\\n*Sabia que se hoje estiver gastando a partir de R$ 300,00 por mês, já vale a pena investir num sistema de energia solar?*\\n\\nPara um orçamento gratuito, basta responder essa mensagem informando o seu gasto médio mensal e rapidamente lhe enviaremos uma solução em economia!%0a\\nVeja abaixo o vídeo de um de nossos clientes satisfeitos!\\n\\nhttps://www.instagram.com/reel/CjlzoWyjw0f/?utm_source=ig_web_copy_link\\n\\n\\n\\nhttps://www.instagram.com/reel/CjlzoWyjw0f/?utm_source=ig_web_copy_link",
        "autoload": "1"
    }],
    "csrfToken": "5cSyy13MuitgL4rurMoYELnNy4SpjDHBgBts0Yjs",
    "user": { "id": 1, "nome": "Taffarel Xavier", "sexo": "m", "email": "taffarelxavier7@gmail.com", "timezone": "America/Araguaina", "date_format": "F j, Y", "time_format": "H:i", "locale": "pt_BR", "first_day_of_week": 0, "mail_signature": null, "last_active_at": "2023-04-29T03:34:48.000000Z", "avatar": null, "super_admin": true, "access_api": true, "created_at": "2023-04-21T15:24:48.000000Z", "updated_at": "2023-04-29T03:34:48.000000Z", "permissions": [], "roles": [] }
}

export default config;
