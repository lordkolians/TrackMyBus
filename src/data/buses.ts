import type { Bus } from '../types';

export const INITIAL_BUSES: Bus[] = [
  { id: 'A-01', rid: 1, name: 'CL-001', p: 0.08, sp: 0.0000185, dir:  1, st: 'moving' },
  { id: 'A-02', rid: 1, name: 'CL-002', p: 0.58, sp: 0.0000195, dir:  1, st: 'moving' },
  { id: 'B-01', rid: 2, name: 'CL-003', p: 0.12, sp: 0.0000178, dir:  1, st: 'moving' },
  { id: 'B-02', rid: 2, name: 'CL-004', p: 0.72, sp: 0.0000188, dir: -1, st: 'moving' },
  { id: 'C-01', rid: 3, name: 'CL-005', p: 0.22, sp: 0.0000192, dir:  1, st: 'moving' },
  { id: 'C-02', rid: 3, name: 'CL-006', p: 0.68, sp: 0.0000175, dir: -1, st: 'moving' },
  { id: 'D-01', rid: 4, name: 'CL-007', p: 0.35, sp: 0.0000182, dir:  1, st: 'moving' },
];
