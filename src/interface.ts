export interface IRepositoryList {
  edges: {
    node: {
      isPrivate: boolean
      name: string
      updatedAt: string
      vulnerabilityAlerts: {
        edges: {
          node: {
            id: string
          }
        }[]
      }
    }
  }[]
  pageInfo: {
    endCursor: string
    startCursor: string
  }
  totalCount: number
}

export interface IVulnerability {
  edges: {
    node: {
      id: string
      securityAdvisory: {
        description: string
        id: string
        identifiers: {
          type: string
          value: string
        }
        origin: string
        permalink: string
        publishedAt: string
        severity: string
        summary: string
      }[]
      securityVulnerability: {
        advisory: {
          id: string
          description: string
        }
      }[]
    }
    pageInfo: {
      endCursor: string
      startCursor: string
    }
    totalCount: number
  }[]
}
