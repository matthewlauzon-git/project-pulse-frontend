import type { Metadata } from 'next'
import { pulseKits } from '@/lib/kits'
import { WorkspaceBuilderClient } from './workspace-builder-client'

export const metadata: Metadata = {
  title: 'Pulse Workspace Builder',
  description: 'A private, modular nursing-school workspace where students drag in only the kits they want.',
}

export default function WorkspacePage() {
  return <WorkspaceBuilderClient kits={pulseKits} />
}
